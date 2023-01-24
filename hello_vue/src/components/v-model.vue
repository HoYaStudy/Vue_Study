<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">v-model</h1>
    <div class="grid grid-cols-2 gap-x-32">
      <div class="text-center">
        <h2 class="mb-2 text-xl font-medium text-green-600">input</h2>
        <div class="flex flex-col">
          <input
            v-model="varName"
            placeholder="Input name"
            class="px-2 rounded text-gray-700 outline-none"
          />
          <input
            v-model.trim="varNickname"
            placeholder="Input nickname"
            class="mt-2 px-2 rounded text-gray-700 outline-none"
          />
          <input
            type="password"
            v-model.lazy="varPassword"
            placeholder="Input password"
            class="mt-2 px-2 rounded text-gray-700 outline-none"
          />
          <input
            type="number"
            v-model.number="varAge"
            placeholder="Input age"
            class="mt-2 px-2 rounded text-gray-700 outline-none"
          />

          <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">checkbox</h2>
          <div class="mt-2 border p-2">
            <label class="mr-2"
              ><input
                type="checkbox"
                value="checkbox1"
                v-model="varCheck"
                class="mr-2"
              />Item1</label
            >
            <label class="mr-2"
              ><input
                type="checkbox"
                value="checkbox2"
                v-model="varCheck"
                class="mr-2"
              />Item2</label
            >
            <label
              ><input
                type="checkbox"
                value="checkbox3"
                v-model="varCheck"
                class="mr-2"
              />Item3</label
            >
          </div>

          <h2 class="mb-2 text-xl font-medium text-green-600">radio</h2>
          <div class="mt-2 border p-2">
            <label class="mr-2"
              ><input
                type="radio"
                value="red"
                v-model="varRadio"
                class="mr-2"
              />Red</label
            >
            <label class="mr-2"
              ><input
                type="radio"
                value="green"
                v-model="varRadio"
                class="mr-2"
              />Green</label
            >
            <label
              ><input
                type="radio"
                value="blue"
                v-model="varRadio"
                class="mr-2"
              />Blue</label
            >
          </div>
        </div>

        <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">textarea</h2>
        <textarea
          v-model="varIntro"
          placeholder="Input your name"
          class="px-2 rounded text-gray-700 outline-none"
        />

        <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">select</h2>
        <select
          v-model="varSelect"
          class="p-2 rounded text-gray-700 outline-none"
        >
          <option value="" disabled>Select</option>
          <option>Select1</option>
          <option>Select2</option>
          <option>Select3</option>
        </select>
      </div>

      <div class="text-center">
        <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Result</h2>
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-center">
          <div>Name</div>
          <div>{{ varName }}, {{ varName.length }}</div>
          <div>Nickname</div>
          <div>{{ varNickname }}, {{ varNickname.length }}</div>
          <div>Password</div>
          <div>{{ varPassword }}</div>
          <div>Age</div>
          <div>{{ varAge }}</div>
          <div>Check</div>
          <div>{{ varCheck }}</div>
          <div>Radio</div>
          <div v-bind:style="{ color: varRadio }">{{ varRadio }}</div>
          <div>Introduction</div>
          <div class="whitespace-pre-line">
            {{ varIntro }}<br />Length: {{ varIntro.length }}
          </div>
          <div>Select</div>
          <div>{{ varSelect }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vModel",
  data: function () {
    return {
      varName: "",
      varNickname: "",
      varPassword: "",
      varAge: 0,
      varCheck: [],
      varRadio: "red",
      varIntro: "",
      varSelect: "",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
