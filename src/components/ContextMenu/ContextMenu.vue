<template>
  <teleport to="body">
    <div
      class="context-menu"
      v-show="show"
      :style="style"
      ref="context"
      tabindex="0"
      @blur="() => close()">
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";

let props = defineProps<{ show: Boolean }>();
let emits = defineEmits<{ (event: "update:show", value: Boolean): void }>();

const show = computed<Boolean>({
  get() {
    return props.show;
  },
  set(value) {
    emits("update:show", value);
  },
});

var context = ref<HTMLDivElement | null>(null);
const left = ref(0); // left position
const top = ref(0); // top position

const style = computed(() => ({
  top: top.value + "px",
  left: left.value + "px",
}));

const close = () => {
  show.value = false;
};

const open = (e: MouseEvent) => {
  // updates position of context menu
  left.value = e.pageX || e.clientX;
  top.value = e.pageY || e.clientY;

  // make element focused
  nextTick(() => context.value?.focus());
  show.value = true;
};

defineExpose({ open });
</script>

<style scoped>
.context-menu {
  position: fixed;
  background: #383838;
  z-index: 999;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
</style>
