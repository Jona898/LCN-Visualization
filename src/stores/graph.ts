import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import type { ElkExtendedEdge, ElkNode } from "elkjs/lib/elk-api";
import { ci_router_Router_hierarchical } from "@/testdata";
import { AssertUnreachable } from "@/helper";

enum SearchDirection {
  FORWARDS,
  BACKWARDS,
}

export const useGraphStore = defineStore("graph", () => {
  /********************************************************************
   * Complete NodeNet
   ********************************************************************/

  const completeGraph = ref<ElkNode>(ci_router_Router_hierarchical);

  const shownIds = ref<Set<string>>(new Set([]));

  completeGraph.value.children?.forEach((children) => {
    shownIds.value.add(children.id);
  });

  const shownedges = computed<ElkExtendedEdge[]>(
    () =>
      completeGraph.value.edges?.filter((edge) =>
        shownIds.value.has(edge.sources[0])
      ) || []
  );

  /********************************************************************
   * Shown Graph Objects
   ********************************************************************/

  const showedGraph = // ref<ElkNode>(ci_router_Router_hierarchical);
    ref<ElkNode>({
      ...completeGraph.value,
      children: completeGraph.value.children?.filter((child) =>
        shownIds.value.has(child.id)
      ),
    });

  // const addNodeToLayout = (addedNode: ElkNode) => {};
  // const removeNodeToLayout = (removedNode: ElkNode) => {};

  const updateShownNodes = ref<number>(0);

  const allNodesShowedFlat = ref<ElkNode[]>([]);

  const updateAllNodesShowedFlat = () => {
    const flatNodes: ElkNode[] =
      showedGraph.value.children?.reduce<ElkNode[]>(
        (prev, curr) =>
          curr.children
            ? prev.concat(
                curr,
                ...curr.children.reduce<ElkNode[]>(
                  (prev, curr) =>
                    curr.children
                      ? prev.concat(curr, ...curr.children)
                      : prev.concat(curr),
                  []
                )
              )
            : prev.concat(curr),
        []
      ) || [];
    allNodesShowedFlat.value = flatNodes
      ? flatNodes.concat(showedGraph.value)
      : [showedGraph.value];
  };

  const allEdgesShownFlat = ref<ElkExtendedEdge[]>([]);

  const updateAllEdgesShownFlat = () => {
    allEdgesShownFlat.value = allNodesShowedFlat.value.reduce<
      ElkExtendedEdge[]
    >((prev, curr) => {
      return curr.edges ? prev.concat(curr.edges) : prev;
    }, []);
  };

  watch(
    shownIds,
    () => {
      updateAllNodesShowedFlat();
      updateAllEdgesShownFlat();
    },
    { immediate: true }
  );

  /********************************************************************
   * Search and Filter Highlighted Items
   ********************************************************************/

  const highlightOptions = ref<{
    highlightedSearchDepth: number;
    searchForward: boolean;
    searchBackward: boolean;
  }>({
    highlightedSearchDepth: 2,
    searchForward: true,
    searchBackward: true,
  });

  const highlightedNode = ref<string>("");

  const highlightedItems = ref<Set<string>>(new Set());

  const changeHighlightedNode = (newSelect: ElkNode) => {
    highlightedNode.value = newSelect.id;

    highlightedItems.value.clear();

    if (newSelect) {
      if (highlightOptions.value.searchForward) {
        addItemsForNode(
          newSelect,
          highlightedItems.value,
          allNodesShowedFlat.value,
          SearchDirection.FORWARDS,
          highlightOptions.value.highlightedSearchDepth
        );
      }

      if (
        highlightOptions.value.searchForward &&
        highlightOptions.value.searchBackward
      ) {
        // Remoce Node Id to search backwards else the request won't start
        highlightedItems.value.delete(newSelect.id);
      }

      if (highlightOptions.value.searchBackward) {
        addItemsForNode(
          newSelect,
          highlightedItems.value,
          allNodesShowedFlat.value,
          SearchDirection.BACKWARDS,
          highlightOptions.value.highlightedSearchDepth
        );
      }
    }
  };

  const changeHighlightedEdge = (newSelect: ElkExtendedEdge) => {
    highlightedNode.value = newSelect.id;

    highlightedItems.value.clear();

    if (newSelect) {
      if (highlightOptions.value.searchForward) {
        addItemsForEdge(
          newSelect,
          highlightedItems.value,
          allNodesShowedFlat.value,
          SearchDirection.FORWARDS,
          highlightOptions.value.highlightedSearchDepth
        );
      }

      if (highlightOptions.value.searchBackward) {
        addItemsForEdge(
          newSelect,
          highlightedItems.value,
          allNodesShowedFlat.value,
          SearchDirection.BACKWARDS,
          highlightOptions.value.highlightedSearchDepth
        );
      }
    }
  };

  const addItemsForNode = (
    node: ElkNode,
    addTo: Set<string>,
    fromWhere: ElkNode[],
    direction: SearchDirection,
    depth: number
  ) => {
    if (!addTo.has(node.id)) {
      addTo.add(node.id);
      node.ports?.forEach((port) => addTo.add(port.id));

      if (depth > 0) {
        const nodeAndPortIds: string[] = [
          node.id,
          ...(node.ports ? node.ports.map((port) => port.id) : []),
        ];

        nodeAndPortIds.forEach((nodeAndPortId) => {
          FindEdgesForId(nodeAndPortId, direction).forEach((edge) => {
            addItemsForEdge(edge, addTo, fromWhere, direction, depth);
          });
        });
      }
    }
  };

  const addItemsForEdge = (
    edge: ElkExtendedEdge,
    addTo: Set<string>,
    fromWhere: ElkNode[],
    direction: SearchDirection,
    depth: number
  ) => {
    addTo.add(edge.id);
    (direction === SearchDirection.FORWARDS
      ? edge.targets
      : direction === SearchDirection.BACKWARDS
      ? edge.sources
      : []
    ).forEach((nodeOrPortId) => {
      const nextNode = getNodeForNodeOrPortId(
        nodeOrPortId,
        allNodesShowedFlat.value
      );

      if (nextNode)
        addItemsForNode(nextNode, addTo, fromWhere, direction, depth - 1);
      else console.error("No Node or Port Provided for: ", nodeOrPortId);
    });
  };

  const FindEdgesForId = (
    nodeOrPortId: string,
    direction: SearchDirection
  ): ElkExtendedEdge[] => {
    switch (direction) {
      case SearchDirection.FORWARDS:
        return allEdgesShownFlat.value.filter(
          (edge) =>
            edge.sources.includes(nodeOrPortId) ||
            edge.targets.includes(nodeOrPortId)
        );
        break;

      case SearchDirection.BACKWARDS:
        return allEdgesShownFlat.value.filter((edge) =>
          edge.targets.includes(nodeOrPortId)
        );
        break;

      default:
        return AssertUnreachable(direction);
        break;
    }
  };

  const getNodeForNodeOrPortId = (
    nodeOrPortId: string,
    fromWhere: ElkNode[]
  ): ElkNode | undefined => {
    return fromWhere.find(
      (node) =>
        nodeOrPortId === node.id ||
        node.ports?.find((port) => port.id === nodeOrPortId)
    );
  };

  return {
    showedGraph,
    highlightedNode,
    changeHighlightedNode,
    changeHighlightedEdge,
    highlightedItems,
    updateShownNodes,
    highlightOptions,

    // completeGraph,
    // shownIds,
    // allNodesShowedFlat,
    // updateAllNodesShowedFlat,
    // allEdgesShownFlat,
    // updateAllEdgesShownFlat,
    // addItemsForNode,
    // addItemsForEdge,
    // FindEdgesForId,
    // getNodeForNodeOrPortId,
  };
});
