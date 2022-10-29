<script setup lang="ts">
import type { ElkLabel } from "elkjs/lib/elk-api";
import { onMounted, ref } from "vue";

const props = defineProps<{ label: ElkLabel }>();

const labelRef = ref<SVGGraphicsElement | null>(null);

onMounted(() => {
  var labelSize = labelRef.value!.getBBox();

  // eslint-disable-next-line vue/no-mutating-props
  props.label.height = labelSize.height;
  // eslint-disable-next-line vue/no-mutating-props
  props.label.width = labelSize.width;
});
</script>

<template>
  <text class="nodeLabel" :x="props.label.x" :y="props.label.y" ref="labelRef">
    {{ props.label.text }}
  </text>
</template>

<style scoped>
.nodeLabel {
  dominant-baseline: text-before-edge;
}
</style>
