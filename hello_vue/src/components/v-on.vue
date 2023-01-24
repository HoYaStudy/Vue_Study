<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">v-on</h1>

    <h2 class="mb-2 text-xl font-medium text-green-600">Click Event</h2>
    <div>Value: {{ counter }}</div>
    <div class="mt-2 flex">
      <button v-on:click="clickUp(2)" class="btn mr-2">Up by 2</button>
      <button v-on:click="clickUp(1)" class="btn mr-2">Up</button>
      <button @click="clickDown" class="btn">Down</button>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Key Event</h2>
    <input
      v-on:keyup.enter="showAlert(1)"
      v-model="varStr"
      placeholder="Input enter key"
      class="px-2 rounded outline-none"
    />
    <input
      @keyup.enter.shift="showAlert(2)"
      v-model="varStr"
      placeholder="Input shift+enter key"
      class="mt-2 px-2 rounded outline-none"
    />
    <div>{{ varStr }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vOn",
  data: function () {
    return {
      counter: 0,
      varStr: "",
    };
  },
  methods: {
    clickUp: function (step: number) {
      this.counter += step;
    },
    clickDown: function () {
      this.counter -= 1;
    },
    showAlert: function (mode: number) {
      if (mode === 1) {
        alert("<Enter> pressed");
      } else if (mode === 2) {
        alert("<Shift+Enter> pressed");
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
