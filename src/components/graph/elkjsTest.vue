<script setup lang="ts">
import ELK, {
  type ElkNode,
  type ElkExtendedEdge,
  type ElkLayoutAlgorithmDescription,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type ElkPoint, // Used in template
} from "elkjs/lib/elk.bundled.js";
import { reactive, computed, watch, ref, onMounted } from "vue";
import ci_router_Router from "./ci_router_Router.json";
import { useSvgViewBoxZoom } from "@/helper";

const svgRef = ref<SVGElement | null>(null);
onMounted(() => {
  console.log(svgRef.value);
});

const svgWidth = computed<number>(() =>
  svgRef.value ? svgRef.value.clientWidth : 100
);
const svgHeight = computed<number>(() =>
  svgRef.value ? svgRef.value.clientHeight : 100
);

const { viewBox_str, wheelEvent, mouseDownEvent, mouseMoveEvent, resetZoom } =
  useSvgViewBoxZoom(svgWidth, svgHeight);

const elk = new ELK({});

let graph = reactive<
  ElkNode & { edges: (ElkExtendedEdge & { path: string })[] }
>(ci_router_Router);

const knownAlgorythms = ref<ElkLayoutAlgorithmDescription[]>([]);
elk
  .knownLayoutAlgorithms()
  .then((algorythms) => (knownAlgorythms.value = algorythms));

const selectedAlgorythm = ref<string>("layered");

const generateNewLayout = () => {
  graph.edges?.forEach((edge) => {
    edge.sections?.forEach((section) => {
      section.bendPoints = [];
    });
  });

  elk
    .layout(graph, {
      layoutOptions: {
        "elk.algorithm": selectedAlgorythm.value,
        // "elk.direction": "DOWN",
        // "elk.insideSelfLoops.activate": true,
        // "elk.edge.thickness": 30,
        // "elk.nodeLabels.placement": "OUTSIDE",
        // "elk.nodeLabels.padding": "[70,70,70,70]", //"[top=70,left=70,bottom=70,right=70]",
      },
    })
    .then((val) => {
      resetZoom(graph.width, graph.height);
      graph.edges = val.edges!.map<ElkExtendedEdge & { path: string }>(
        (edge) => ({
          ...edge,
          path: generateEdgePath(edge),
        })
      );
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

const generateEdgePath = (line: ElkExtendedEdge | undefined): string => {
  if (line?.sections == undefined) return "";
  return line.sections.reduce<string>(
    (prev, edgeSection) =>
      prev +
      `M${edgeSection.startPoint.x},${edgeSection.startPoint.y}${
        edgeSection.bendPoints != undefined
          ? edgeSection.bendPoints?.reduce<string>(
              (prev, curr) => prev + `L${curr.x},${curr.y}`,
              ""
            )
          : ""
      }L${edgeSection.endPoint.x},${edgeSection.endPoint.y}`,
    ""
  );
};

generateNewLayout();
</script>

<template>
  <div>
    <div class="tooltip">
      <span class="tooltiptext">
        {{
          knownAlgorythms.find((elem) => elem.id?.includes(selectedAlgorythm))
            ?.description
        }}
      </span>
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
    </div>

    <svg
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox_str"
      style="background-color: green"
      @wheel.prevent="wheelEvent"
      @mousedown="mouseDownEvent"
      @mousemove="mouseMoveEvent">
      <defs>
        <!-- Arrow at the end of each Edge -->
        <marker
          id="head"
          orient="auto"
          markerWidth="2"
          markerHeight="4"
          refX="1.55"
          refY="2">
          <path d="M0,0 V4 L2,2 Z" fill="black" />
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
      <g
        v-for="node in graph.children"
        :key="node.id"
        class="node"
        :original-title="node.id"
        :transform="`translate(${node.x != undefined ? node.x : 0},${
          node.y != undefined ? node.y : 0
        })`">
        <!-- Node Main Box -->
        <rect :width="node.width" :height="node.height" fill="saddlebrown" />

        <!-- Node Ports -->
        <rect
          v-for="port in node.ports"
          :key="port.id"
          :aria-label="port.id"
          :x="port.x"
          :y="port.y"
          :width="port.width"
          :height="port.height"
          fill="darkblue" />

        <!-- Node Id in Box -->
        <text
          opacity="1"
          stroke="blue"
          :x="node.width! / 2"
          :y="node.height! / 2"
          dominant-baseline="middle"
          text-anchor="middle">
          <tspan>
            {{ node.id }}
          </tspan>
        </text>

        <!-- Node Label -->
        <text
          v-for="label in node.labels"
          :key="label.id"
          :x="label.x"
          :y="label.y"
          dominant-baseline="hanging">
          <!-- text-anchor="middle" -->
          {{ label.text }}
        </text>
      </g>

      <!-- Edges -->
      <path
        v-for="edge in graph.edges"
        :key="edge.sources + '-' + edge.targets"
        :d="edge.path"
        stroke-width="3"
        fill="none"
        stroke="red"
        opacity="1"
        marker-end="url(#head)" />

      <!-- Junction Points -->
      <circle
        v-for="joint in graph.edges.reduce<ElkPoint[]>((juncPoints, edge)=>( edge.junctionPoints?juncPoints.concat    (...edge.junctionPoints) :juncPoints ) ,[])"
        :key="`Joint-${joint.x}-${joint.y}`"
        :cx="joint.x"
        :cy="joint.y"
        r="3" />
    </svg>
  </div>
</template>

<style scoped>
.test {
  color: saddlebrown;
}

select {
  max-width: 90vw;
  overflow-x: hidden;
}

svg {
  width: 100%;
  height: 80vh;
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  /* width: 120px; */
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -50%;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
