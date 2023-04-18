<template>
  <ContextMenue v-model:show="showContextMenue" ref="context_menu">
    <ul>
      <li><button>add</button></li>
      <ul>
        <li><button>children</button></li>
        <li><button>forward</button></li>
        <li><button>backward</button></li>
      </ul>
      <li><button>delete</button></li>
      <li><button>children</button></li>
      <ul>
        <li v-for="children in currentNode?.children" :key="children.id">
          {{ children.id }}: {{ children.labels![0].text }}
        </li>
      </ul>
      <li><button>fsafe</button></li>
    </ul>
  </ContextMenue>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContextMenue from "../ContextMenu/ContextMenu.vue";
import type { ElkNode } from "elkjs/lib/elk-api";
import { useGraphStore } from "@/stores";

const showContextMenue = ref(false);
const context_menu = ref<typeof ContextMenue | null>(null);
const currentNode = ref<ElkNode | null>(null);

const store = useGraphStore();
store.showedGraph;

// interface ctx_nodes_props {}
// const props = defineProps<ctx_nodes_props>();

const open = (e: MouseEvent, node: ElkNode) => {
  context_menu.value?.open(e);

  if (node) currentNode.value = node;
  else console.error("Opened ContextMenu_Node without node");
};

defineExpose({ open });
</script>

<style scoped></style>
