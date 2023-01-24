<template>
  <div class="p-4 flex flex-col justify-start items-center">
    <h1 class="text-2xl font-medium text-green-400">Plugins</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Plugin</h2>
    <div>{{ $pick(1) }}</div>
    <div>{{ $pick(2) }}</div>
    <div>{{ $pick(3) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Plugin",
  inject: ["vending"],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
