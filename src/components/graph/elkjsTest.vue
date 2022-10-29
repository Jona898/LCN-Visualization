<script setup lang="ts">
import ELK, {
  type ElkNode,
  type ElkLayoutAlgorithmDescription,
} from "elkjs/lib/elk.bundled";
import { reactive, watch, ref, provide } from "vue";

import { ci_router_Router, ci_router_Router_hierarchical } from "@/testdata";
import {
  useSvgViewBoxZoom,
  selectedNodeKey,
  changeSelectedNodeKey,
} from "@/helper";
import { NodeGroup, NodeEdge } from "./";

const svgRef = ref<SVGElement | null>(null);

const { viewBox_str, wheelEvent, mouseDownEvent, mouseMoveEvent, resetZoom } =
  useSvgViewBoxZoom(svgRef);

const selectedNode = ref<string>("");
const changeSelectedNode = (newSelect: string) => {
  selectedNode.value = newSelect;
};

provide(selectedNodeKey, selectedNode);
provide(changeSelectedNodeKey, changeSelectedNode);

const elk = new ELK({});

let graph = reactive<ElkNode>(ci_router_Router_hierarchical);
// OR ci_router_Router
//    ci_router_Router_hierarchical

const knownAlgorythms = ref<ElkLayoutAlgorithmDescription[]>([]);
elk
  .knownLayoutAlgorithms()
  .then((algorythms) => (knownAlgorythms.value = algorythms));

const selectedAlgorythm = ref<string>("layered");

const generateNewLayout = () => {
  // ToDo: Remoce, if layout isn't changable anymore
  graph.edges?.forEach((edge) => {
    edge.sections?.forEach((section) => {
      section.bendPoints = [];
    });
  });

  elk
    .layout(graph, {
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
        "elk.spacing.nodeNode": 20,
        "elk.layered.spacing.nodeNodeBetweenLayers": 20,
        "elk.spacing.edgeNode": 20,
        "elk.layered.spacing.edgeNodeBetweenLayers": 20,

        "elk.edge.thickness": 4,

        "elk.edgeLabels.placement": "CENTER",
        "elk.edgeLabels.inline": true,

        //   logging: true,
      },
    })
    .then(() => {
      resetZoom(graph.width, graph.height);

      // console.log(graph);
    })
    .catch((e) => console.warn({ e }));
};

watch(
  selectedAlgorythm,
  () => {
    generateNewLayout();
  },
  { immediate: false, deep: true }
);

generateNewLayout();
</script>

<template>
  <select
    name="layoutAlgoryth"
    id="layoutAlgoryth"
    v-model.lazy="selectedAlgorythm">
    <option
      v-for="opt in knownAlgorythms"
      :key="opt.id"
      :value="opt.id?.slice(16)">
      {{ opt.name }}: {{ opt.description?.slice(undefined, 80) }}...
    </option>
  </select>
  <p>{{ selectedAlgorythm }}</p>

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

    <!-- Border Graph -->
    <rect
      :x="graph.x"
      :y="graph.y"
      :width="graph.width"
      :height="graph.height"
      fill="none"
      stroke="#204060"
      stroke-width="2" />

    <!-- Each Node -->
    <NodeGroup
      class="nodeGroup"
      v-for="node in graph.children"
      :key="node.id"
      :node="node"
      :original-title="node.id" />
    <!-- :transform="`translate(${node.x != undefined ? node.x : 0},${
          node.y != undefined ? node.y : 0
  })` -->

    <!-- Edges -->
    <NodeEdge
      v-for="edge in graph.edges"
      :key="edge.sources[0] + '-' + edge.targets[0]"
      :edge="edge" />
  </svg>
</template>

<style scoped>
.test {
  color: saddlebrown;
}

svg {
  width: 100%;
  height: 80vh;
  background-color: green;
}
</style>

// /* Global Style */
<style>
svg rect.selected {
  stroke: red !important;
  stroke-width: 4 !important;
}
</style>
