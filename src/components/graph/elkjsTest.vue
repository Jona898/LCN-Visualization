<script setup lang="ts">
import ELK from "elkjs/lib/elk.bundled";
import { ref } from "vue";
import { useSvgViewBoxZoom } from "@/helper";
import { NodeGroup, NodeEdge } from "./";
import { storeToRefs, useGraphStore } from "@/stores";

const svgRef = ref<SVGElement | null>(null);

const { viewBox_str, wheelEvent, mouseDownEvent, mouseMoveEvent, resetZoom } =
  useSvgViewBoxZoom(svgRef);

const { showedGraph, highlightOptions } = storeToRefs(useGraphStore());

const elk = new ELK({});

const generateNewLayout = () => {
  elk
    .layout(showedGraph.value, {
      layoutOptions: {
        "elk.algorithm": "elk.layered",
        "elk.hierarchyHandling": "SEPARATE_CHILDREN",
        "elk.portAlignment.default": "DISTRIBUTED",
        "elk.portConstraints": "FIXED_ORDER",

        "elk.nodeSize.minimum": "(40,40)",
        "elk.nodeLabels.placement": "[H_CENTER, V_TOP, INSIDE]",
        "elk.nodeSize.constraints": "[NODE_LABELS, PORTS]",
        "elk.margins": "[top=20,left=20,bottom=20,right=20]",
        "elk.padding": "[top=30,left=30,bottom=30,right=30]",
        "elk.spacing.nodeNode": "20",
        "elk.layered.spacing.nodeNodeBetweenLayers": "20",
        "elk.spacing.edgeNode": "20",
        "elk.layered.spacing.edgeNodeBetweenLayers": "20",
        // "elk.spacing.commentComment": "20",

        "elk.edge.thickness": "4",

        "elk.edgeLabels.placement": "CENTER",
        "elk.edgeLabels.inline": "true",

        //   logging: true,
      },
    })
    .then(() => {
      resetZoom(showedGraph.value.width, showedGraph.value.height);

      // console.log(showedGraph);
    })
    .catch((e) => console.error({ e }));
};

generateNewLayout();
</script>

<template>
  <div>
    <label for="searchDepth_ran">How deep to search to highlight: </label>
    <input
      type="range"
      name="searchDepth_ran"
      id="searchDepth_ran"
      min="1"
      max="10"
      v-model="highlightOptions.highlightedSearchDepth" />
    <input
      type="number"
      name="searchDepth_num"
      id="searchDepth_num"
      min="1"
      max="10"
      v-model="highlightOptions.highlightedSearchDepth" />
  </div>
  <div>
    <label for="searchForwards">Search Forwards</label>
    <input
      type="checkbox"
      name="searchForwards"
      id="searchForwards"
      v-model="highlightOptions.searchForward" />
    <label for="searchBackwards">Search Backwards</label>
    <input
      type="checkbox"
      name="searchBackwards"
      id="searchBackwards"
      v-model="highlightOptions.searchBackward" />
  </div>

  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox_str"
    @wheel.prevent="wheelEvent"
    @mousedown="mouseDownEvent"
    @mousemove="mouseMoveEvent">
    <defs>
      <!-- Arrow at the end of each Edge -->
      <marker
        id="markerArrow"
        orient="auto"
        markerWidth="2"
        markerHeight="4"
        refX="1.55"
        refY="2">
        <path class="nodeEdge nodeEdgeMarker" d="M0,0 V4 L2,2 Z" fill="black" />
      </marker>
    </defs>

    <!-- Border graph -->
    <rect
      :x="showedGraph.x"
      :y="showedGraph.y"
      :width="showedGraph.width"
      :height="showedGraph.height"
      fill="none"
      stroke="#204060"
      stroke-width="2" />

    <!-- Each Node -->
    <NodeGroup
      class="nodeGroup"
      v-for="node in showedGraph.children"
      :key="node.id"
      :node="node"
      :original-title="node.id" />
    <!-- :transform="`translate(${node.x != undefined ? node.x : 0},${
          node.y != undefined ? node.y : 0
  })` -->

    <!-- Edges -->
    <NodeEdge
      v-for="edge in showedGraph.edges"
      :key="edge.sources[0] + '-' + edge.targets[0]"
      :edge="edge" />
  </svg>
</template>

<style scoped>
svg {
  width: 100%;
  height: 80vh;
  background-color: green;
}
</style>
