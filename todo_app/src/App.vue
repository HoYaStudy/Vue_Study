<template>
  <div v-for="todo in todos" :key="todo.text">
    <label>
      <input type="checkbox" v-model="todo.done" class="mr-2" />
      <span :class="{ donestyle: todo.done }">{{ todo.text }}</span>
    </label>
  </div>

  <div>
    <input
      type="text"
      v-model.trim="textToAdd"
      @keyup.enter="addToDo"
      placeholder="Input ToDo"
      class="mt-4 mr-2 px-2 border rounded"
    />
  </div>
  <button
    @click="cleanToDo"
    class="
      mt-2
      px-2
      py-1
      border
      rounded
      text-gray-100
      bg-gray-700
      hover:text-gray-700
      hover:bg-gray-300
      transition-colors
    "
  >
    Clean
  </button>

  <div class="mt-4">{{ remaining }} / {{ todos.length }} completed</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: function () {
    return {
      todos: [
        {
          done: false,
          text: "todo 1",
        },
        {
          done: false,
          text: "todo 2",
        },
      ],
      textToAdd: "",
    };
  },
  computed: {
    remaining: function (): number {
      return this.todos.filter((todo) => todo.done).length;
    },
  },
  methods: {
    addToDo: function () {
      if (this.textToAdd) {
        this.todos.push({ done: false, text: this.textToAdd });
        this.textToAdd = "";
      }
    },
    cleanToDo: function () {
      this.todos = this.todos.filter((todo) => todo.done === false);
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

.donestyle {
  text-decoration: line-through;
  color: lightgray;
}
</style>
