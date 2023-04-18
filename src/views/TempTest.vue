<script setup lang="ts">
import ContextMenue from "@/components/ContextMenu/ContextMenu.vue.js";
import { onMounted, ref } from "vue";

const showContextMenue = ref(true);
const context_menu = ref<typeof ContextMenue | null>(null);

let error = "";

onMounted(() => {
  if (context_menu.value) {
    // contextMenue.value.open();
    context_menu.value.top = 200;
    context_menu.value.left = 500;
  } else {
    error = "Contextmenu.value not set";
  }
});

const rightClick = (e: MouseEvent) => {
  e.preventDefault();
  console.log(e);
  context_menu.value?.open(e);
};
</script>

<template>
  <div @contextmenu="(e) => rightClick(e)">
    <!-- @click.right.prevent="(e) => context_menu?.open(e)" -->
    <div>Testseite für temporäre Tests</div>
    {{ error }}
    {{ context_menu }}
  </div>

  <ContextMenue v-model:show="showContextMenue" ref="context_menu">
    <ul>
      <li><button>asdfa</button></li>
      <li><button>fdsaoemf</button></li>
      <li><button>fdsafkopre</button></li>
      <li><button>fsafe</button></li>
    </ul>
  </ContextMenue>
</template>

<style scoped>
ul {
  padding: 0 10px;
}

li {
  list-style: none;
}
</style>
