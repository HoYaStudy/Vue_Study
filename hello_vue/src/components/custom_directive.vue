<template>
  <div
    style="height: 3000px"
    class="p-4 flex flex-col justify-start items-center"
  >
    <h1 class="text-2xl font-medium text-green-400">Custom Directive</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Global</h2>
    <input
      type="text"
      v-focus
      class="w-2/12 px-2 py-1 text-gray-700 outline-none"
    />

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Local</h2>
    <div v-pin="position" class="p-4 bg-green-300 text-gray-700">
      Fixed Area
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomDirective",
  data: () => {
    return {
      position: { top: 50, left: 50 },
    };
  },
  directives: {
    pin: {
      mounted: (el: HTMLElement, binding) => {
        el.style.position = "fixed";
        el.style.top = binding.value.top + "px";
        el.style.left = binding.value.left + "px";
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
