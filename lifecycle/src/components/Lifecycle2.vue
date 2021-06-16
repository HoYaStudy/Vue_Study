<template>
  <div class="my-4 border">
    <h1>Lifecycle 2</h1>
    <div class="flex justify-center">
      <h2>{{ count }}</h2>
      <button @click="plus" class="ml-2 font-bold">+</button>
      <button @click="minus" class="ml-2 font-bold">−</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Lifecycle2",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    plus: function () {
      this.count++;
    },
    minus: function () {
      this.count--;
    },
  },
  beforeCreate: function () {
    console.log("2> beforeCreate");
  },
  created: function () {
    console.log("2> created");
  },
  beforeMount: function () {
    console.log("2> beforeMount");
  },
  mounted: function () {
    console.log("2> mounted");
  },
  beforeUpdate: function () {
    console.log("2> beforeUpdate");
  },
  updated: function () {
    console.log("2> updated");
  },
  beforeUnmount: function () {
    console.log("2> beforeUnmount");
  },
  unmounted: function () {
    console.log("2> unmounted");
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
