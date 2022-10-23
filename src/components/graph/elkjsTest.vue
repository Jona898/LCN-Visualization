<script setup lang="ts">
import ELK, { type ElkExtendedEdge } from "elkjs/lib/elk.bundled.js";
import type { ElkNode } from "elkjs/lib/elk.bundled.js";
import { reactive } from "vue";

const elk = new ELK({});

let simpleGraph = reactive<ElkNode>({
  id: "root",
  layoutOptions: { algorithm: "layered" },
  children: [
    { id: "n1", width: 30, height: 30 },
    { id: "n2", width: 30, height: 30 },
    { id: "n3", width: 30, height: 30 },
  ],
  edges: [
    { id: "e1", sources: ["n1"], targets: ["n2"] },
    { id: "e2", sources: ["n1"], targets: ["n3"] },
  ],
});

elk
  .layout(simpleGraph, {
    layoutOptions: {
      algorithm: "layered",
    },
    // logging: true,
    // measureExecutionTime: true,
  })
  .then((nodes) => {
    simpleGraph = nodes;
    console.log({ simpleGraph });
    console.log({ Node1: simpleGraph.edges?.[1] });
    console.log({ Line: generateEdgePath(simpleGraph.edges?.[1]) });
  });

const width = "250px";
const height = "250px";

const generateEdgePath = (line: ElkExtendedEdge | undefined) => {
  if (line == undefined) return;
  const edgeSection = line.sections?.[0];
  if (edgeSection == undefined) return;
  return `M${edgeSection.startPoint.x},${edgeSection.startPoint.y}${
    edgeSection.bendPoints != undefined
      ? edgeSection.bendPoints?.reduce<string>(
          (prev, curr) => prev + `L${curr.x},${curr.y}`,
          ""
        )
      : ""
  }L${edgeSection.endPoint.x},${edgeSection.endPoint.y}`;
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 100 100"
    style="background-color: green">
    <defs>
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

    <g
      v-for="node in simpleGraph.children"
      :key="node.id"
      class="node"
      :original-title="node.id">
      <!-- :transform="`translate(${node.x != undefined ? node.x : 0},${
        node.y != undefined ? node.y : 0
      })`" -->
      <rect
        :x="node.x != undefined ? node.x : 0"
        :y="node.y != undefined ? node.y : 0"
        :width="node.width"
        :height="node.height"></rect>
      <!-- <text
        text-anchor="middle"
        :x="-node.width / 2"
        :y="-node.height / 2"
        opacity="1"
        color="blue">
        <tspan x="0" dy="1em">{{ node.label }}</tspan>
      </text> -->
    </g>

    <path
      v-for="edge in simpleGraph.edges"
      :key="edge.sources + '-' + edge.targets"
      :d="edge.sections != undefined ? generateEdgePath(edge) : ''"
      stroke-width="3"
      fill="none"
      stroke="red"
      opacity="1" />
    <!-- marker-end="url(#head)" -->
  </svg>
</template>

<style scoped></style>
