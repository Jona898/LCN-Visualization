<script setup lang="ts">
import { GenerateTypesForApi } from "../helper/index";

const genTypApi = new GenerateTypesForApi();
genTypApi.GenerateLayoutOptionsTypes().then((val) => console.log(val));
</script>

<template>
  <div>Testseite für temporäre Tests</div>
</template>

<style scoped></style>
