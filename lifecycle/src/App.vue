<template>
  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <Lifecycle1 v-if="flag == true" />
  <Lifecycle2 v-else />
  <button @click="toggle">Toggle</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lifecycle1 from "./components/Lifecycle1.vue";
import Lifecycle2 from "./components/Lifecycle2.vue";

export default defineComponent({
  name: "App",
  components: {
    Lifecycle1,
    Lifecycle2,
  },
  data: function () {
    return {
      flag: false,
    };
  },
  methods: {
    toggle: function () {
      console.log("########## Toggle ##########");
      this.flag = !this.flag;
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
