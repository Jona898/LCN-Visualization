<script setup lang="ts">
import { useGraphStore } from "@/stores";
import elkjsTest from "../components/graph/elkjsTest.vue";

useGraphStore();
</script>

<template>
  <div>
    <!-- <Suspense> -->
    <elkjsTest></elkjsTest>

    <!-- loading state via #fallback slot -->
    <!-- <template #fallback> Loading... </template> -->
    <!-- </Suspense> -->
  </div>
</template>

<style scoped></style>
