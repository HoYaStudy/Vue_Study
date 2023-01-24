<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">
      Variable, Data Types
    </h1>

    <h2 class="mb-2 text-xl font-medium text-green-600">Display Method</h2>
    <div class="grid grid-cols-2 gap-1 text-center">
      <h3 class="text-lg">&#123;&#123; &#125;&#125;</h3>
      <h3 class="text-lg">{{ varTag }}</h3>
      <h3 class="text-lg">v-text</h3>
      <h3 v-text="varTag" class="text-lg"></h3>
      <h3 class="text-lg">v-html</h3>
      <h3 v-html="varTag" class="text-lg"></h3>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Data Types</h2>
    <div class="grid grid-cols-2 gap-1 text-center">
      <h3 class="text-lg">Boolean</h3>
      <h3 class="text-lg">{{ varBool }}</h3>
      <h3 class="text-lg">Number</h3>
      <h3 class="text-lg">{{ varNum }}</h3>
      <h3 class="text-lg">String</h3>
      <h3 class="text-lg">{{ varStr }}</h3>
      <h3 class="text-lg">Array</h3>
      <h3 class="text-lg">{{ varArr[0] }}, {{ varArr[1] }}, {{ varArr[2] }}</h3>
      <h3 class="text-lg">Object</h3>
      <h3 class="text-lg">{{ varObj.name }}, {{ varObj.age }}</h3>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Variables</h2>
    <h3 class="text-lg">
      {{ varNames[0] }}, {{ varNames[1] }}, {{ varNames[2] }}
    </h3>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Display All Data
    </h2>
    <h3 class="w-6/12 text-lg">
      {{ $data }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const names = ["kim", "lee", "park"];

export default defineComponent({
  name: "VariableDataTypes",
  data: function () {
    return {
      varTag: "<div>Hello Vue</div>",
      varBool: true,
      varNum: 7,
      varStr: "Vue.js",
      varArr: [3.14, false, "array"],
      varObj: { name: "HoYa", age: 18 },
      varNames: names,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
