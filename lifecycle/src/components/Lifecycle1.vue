<template>
  <div class="my-4 border">
    <h1>Lifecycle 1</h1>
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
  name: "Lifecycle1",
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
    console.log("1> beforeCreate");
  },
  created: function () {
    console.log("1> created");
  },
  beforeMount: function () {
    console.log("1> beforeMount");
  },
  mounted: function () {
    console.log("1> mounted");
  },
  beforeUpdate: function () {
    console.log("1> beforeUpdate");
  },
  updated: function () {
    console.log("1> updated");
  },
  activated: function () {
    console.log("1> activated");
  },
  deactivated: function () {
    console.log("1> deactivated");
  },
  beforeUnmount: function () {
    console.log("1> beforeUnmount");
  },
  unmounted: function () {
    console.log("1> unmounted");
  },
  errorCaptured: function () {
    console.log("1> errorCaptured");
  },
  renderTracked: function () {
    console.log("1> renderTracked");
  },
  renderTriggered: function () {
    console.log("1> renderTriggered");
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
