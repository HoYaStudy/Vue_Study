<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">v-if</h1>

    <h2 class="mb-2 text-xl font-medium text-green-600">if</h2>
    <div v-if="varShow">This is a test string.</div>
    <label
      ><input type="checkbox" v-model="varShow" class="mt-2 mr-2" />Show</label
    >
    <div v-show="true">v-show test: true</div>
    <div v-show="false">v-show test: false</div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">if - else</h2>
    <div v-if="varOnOff">On</div>
    <div v-else>Off</div>
    <label
      ><input type="checkbox" v-model="varOnOff" class="mt-2 mr-2" />On /
      Off</label
    >

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      if - else-if - else
    </h2>
    <div>{{ varSelect }}</div>
    <div v-if="varSelect === 'if'">Selected: if</div>
    <div v-else-if="varSelect === 'else-if'">Selected: else-if</div>
    <div v-else>Selected: else</div>
    <select
      v-model="varSelect"
      class="mt-2 px-2 py-1 rounded text-gray-700 outline-none"
    >
      <option>if</option>
      <option>else-if</option>
      <option>else</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vIf",
  data: function () {
    return {
      varShow: false,
      varOnOff: false,
      varSelect: "if",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
