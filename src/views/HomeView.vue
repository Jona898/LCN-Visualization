<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />

    <HelloWorld msg="You did it!" />

    <TheWelcome />
  </main>
</template>
