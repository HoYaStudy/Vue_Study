<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="mb-8 text-2xl font-medium text-green-400">v-for</h1>

    <h2 class="mb-2 text-xl font-medium text-green-600">Count</h2>
    <ul>
      <li v-for="num in 9" :key="num">⯈ 2 x {{ num }} = {{ 2 * num }}</li>
    </ul>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Array</h2>
    <ul>
      <li v-for="elem in fruits" :key="elem">⯈ {{ elem }}</li>
    </ul>
    <ul>
      <li v-for="(elem, index) in fruits" :key="elem">
        ⯈ {{ index }}: {{ elem }}
      </li>
    </ul>
    <div class="mt-2 flex">
      <button @click="change(0, 'orange')" class="btn mr-4">Change</button>
      <button @click="push('mango')" class="btn mr-4">Push</button>
      <button @click="add(2, 'grape')" class="btn mr-4">Add</button>
      <button @click="remove(3)" class="btn">Remove</button>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Object</h2>
    <ul>
      <li v-for="item in scores" :key="item">
        ⯈ {{ item.name }}: {{ item.score }}
      </li>
    </ul>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      Combination of v-for and v-if
    </h2>
    <ul>
      <template v-for="num in 10">
        <li :key="num" v-if="num % 2 === 0">⯈ {{ num }}</li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vFor",
  data: function () {
    return {
      fruits: ["apple", "banana", "cherry"],
      scores: [
        { name: "kim", score: 97 },
        { name: "lee", score: 76 },
        { name: "park", score: 88 },
      ],
    };
  },
  methods: {
    change: function (position: number, fruit: string) {
      this.fruits[position] = fruit;
    },
    push: function (fruit: string) {
      this.fruits.push(fruit);
    },
    add: function (position: number, fruit: string) {
      this.fruits.splice(position, 0, fruit);
    },
    remove: function (position: number) {
      this.fruits.splice(position, 1);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
