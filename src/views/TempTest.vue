<script setup lang="ts">
import ContextMenue from "@/components/ContextMenu/ContextMenu.vue";
import { onMounted, ref } from "vue";

const showContextMenue = ref(true);
const context_menu = ref<InstanceType<typeof ContextMenue> | null>(null);

let error = "";

onMounted(() => {
  if (context_menu.value) {
    const event: Pick<MouseEvent, "pageX" | "pageY" | "clientX" | "clientY"> = {
      clientX: 500,
      pageX: 500,
      clientY: 200,
      pageY: 200,
    };
    context_menu.value.open(<MouseEvent>event);
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
