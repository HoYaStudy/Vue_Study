<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <hr />
  <h1>ToDo List</h1>
  <ol>
    <ToDoItem
      v-for="(item, index) in todoItems"
      :key="index"
      :item="item"
      :index="index"
      @melong="yaho"
    />
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoItem from "./components/ToDoItem.vue";

export default defineComponent({
  name: "App",
  components: {
    ToDoItem,
  },
  data: function () {
    return {
      todoItems: [
        { title: "ToDo Item1", complete: false },
        { title: "ToDo Item2", complete: false },
        { title: "ToDo Item3", complete: false },
      ],
    };
  },
  methods: {
    yaho(index: number) {
      this.todoItems[index].complete = !this.todoItems[index].complete;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
