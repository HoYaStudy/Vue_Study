<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="text-2xl font-medium text-green-400">Computed</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Computed Property: Calculate Price
    </h2>
    <div>Apple: ₩500</div>
    <input type="number" v-model="count" class="my-2 px-2 text-gray-700" />
    <div>Total Price: ₩{{ totalPrice }}</div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Computed Property: Mix Color
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="grid grid-cols-2 text-center">
        <div>R</div>
        <input
          type="range"
          id="red"
          name="red"
          v-model="rValue"
          min="0"
          max="255"
        />
        <div>G</div>
        <input
          type="range"
          id="green"
          name="green"
          v-model="gValue"
          min="0"
          max="255"
        />
        <div>B</div>
        <input
          type="range"
          name="blue"
          id="blue"
          v-model="bValue"
          min="0"
          max="255"
        />
      </div>
      <div v-bind:style="{ backgroundColor: mixColor }" class="w-4/12"></div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Watcher</h2>
    <div>Count Down: {{ remain }}</div>
    <button @click="countDown" class="btn mt-2">Count Down</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedWatch",
  data: function () {
    return {
      count: 0,
      rValue: 0,
      gValue: 0,
      bValue: 0,
      remain: 0,
      timerObj: 0,
    };
  },
  computed: {
    totalPrice: function (): number {
      return this.count * 500;
    },
    mixColor: function (): string {
      return `RGB(${this.rValue},${this.gValue},${this.bValue})`;
    },
  },
  methods: {
    countDown: function () {
      this.remain = 10;
      this.timerObj = setInterval(() => {
        this.remain--;
      }, 1000);
    },
  },
  watch: {
    remain: function () {
      if (this.remain <= 0) {
        alert("Timeout");
        clearInterval(this.timerObj);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
