<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">v-bind</h1>

    <h2 class="mb-2 text-xl font-medium text-green-600">img</h2>
    <div class="text-center">
      <img v-bind:src="imgUrl" />
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">a</h2>
    <div class="text-center">
      <a v-bind:href="aUrl">Go to the Vue.js</a>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">style</h2>
    <div class="text-center">
      <div v-bind:style="{ backgroundColor: style1 }">Style1</div>
      <div v-bind:style="{ fontSize: style2 }">Style2</div>
      <div v-bind:style="{ color: style3 }">Style3</div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">class</h2>
    <div class="text-center">
      <div v-bind:class="classAttr1">Class 1</div>
      <div v-bind:class="[classAttr1, classAttr2]">Class 1 & 2</div>
      <div v-bind:class="{ light: true }">Class 3</div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">TailwindCSS</h2>
    <div class="grid grid-cols-2 gap-4 text-center">
      <button class="btn">OK</button>
      <button class="btn">NO</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vBind",
  data: function () {
    return {
      imgUrl: "https://source.unsplash.com/random/320x240",
      aUrl: "https://vuejs.org/",
      style1: "red",
      style2: "28px",
      style3: "yellow",
      classAttr1: "text-blue-400",
      classAttr2: "text-xl",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
