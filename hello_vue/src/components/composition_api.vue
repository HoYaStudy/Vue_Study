<template>
  <div class="p-4 flex flex-col justify-start items-center">
    <h1 class="text-2xl font-medium text-green-400">Composition API</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Composition API Method
    </h2>
    <div class="flex justify-center">
      <input
        type="number"
        v-model.number="num1"
        class="w-2/12 px-2 py-1 text-gray-700 outline-none"
      />
      <div class="mx-4 text-2xl">+</div>
      <input
        type="number"
        v-model.number="num2"
        class="w-2/12 px-2 py-1 text-gray-700 outline-none"
      />
      <div class="mx-4 text-2xl">=</div>
      <div class="text-2xl">{{ result }}</div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Provide / Inject
    </h2>
    <PIChild3 />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  provide,
} from "vue";
import { addTwoNumbers } from "../common";
import PIChild3 from "./pi_child3.vue";

export default defineComponent({
  name: "CompositionAPI",
  components: { PIChild3 },
  setup() {
    onBeforeMount(() => {
      console.log("Component is in beforeMount");
    });
    onMounted(() => {
      console.log("Component is mounted");
    });
    onBeforeUpdate(() => {
      console.log("Component is in beforeUpdate");
    });
    onUpdated(() => {
      console.log("Component is updated");
    });
    onBeforeUnmount(() => {
      console.log("Component is in beforeUnmount");
    });
    onUnmounted(() => {
      console.log("Component is unmounted");
    });
    onErrorCaptured(() => {
      console.log("Component captured error");
    });
    onRenderTracked(() => {
      console.log("Component tracked rendering");
    });
    onRenderTriggered(() => {
      console.log("Component triggered rendering");
    });
    let { num1, num2, result } = addTwoNumbers();
    provide("result", result);
    return { num1, num2, result };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
