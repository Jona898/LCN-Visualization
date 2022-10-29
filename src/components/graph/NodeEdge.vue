<script setup lang="ts">
import type { ElkExtendedEdge } from "elkjs/lib/elk-api";

const props = defineProps<{ edge: ElkExtendedEdge }>();

const generateEdgePath = (line: ElkExtendedEdge): string => {
  if (line.sections == undefined) return "";

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
</script>

<template>
  <path class="nodeEdge" :d="generateEdgePath(props.edge)" />

  <!-- Junction Points -->
  <circle
    class="nodeEdgeJunctionPoint"
    v-for="joint in props.edge.junctionPoints"
    :key="`Joint-${joint.x}-${joint.y}`"
    :cx="joint.x"
    :cy="joint.y"
    r="3" />
</template>

<style scoped>
.nodeEdge {
  stroke-width: 3;
  fill: none;
  stroke: gray;
  opacity: 1;
  marker-end: url(#markerArrow);
}

.nodeEdgeMarker {
  stroke-width: unset;
  fill: gray;
  stroke: none;
}

.nodeEdgeJunctionPoint {
  fill: black;
  z-index: 10;
}
</style>
