<template>
  <div>
    <div class="mb-4 flex justify-center items-end">
      <div class="text-3xl">{{ count }}</div>
      <div class="ml-4 text-xl">({{ squaredOfCount }})</div>
    </div>
    <button
      @click="decrease"
      class="w-20 border border-gray-700 rounded-l text-2xl focus:outline-none"
    >
      -
    </button>
    <button
      @click="increase"
      class="w-20 border border-gray-700 rounded-r text-2xl focus:outline-none"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  setup: function () {
    const store = useStore();
    const count = computed(() => store.state.count);
    const squaredOfCount = computed(() => store.getters.square);
    return { store, count, squaredOfCount };
  },
  methods: {
    increase() {
      // this.store.commit("increase"); // mutations
      this.store.dispatch("increase");
    },
    decrease() {
      // this.store.commit("decrease"); // mutations
      this.store.dispatch("decrease");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
