<template>
  <div class="p-4 flex flex-col justify-start items-center">
    <h1 class="text-2xl font-medium text-green-400">Mixins</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">Mixin</h2>
    <div class="flex items-center">
      <div>Name</div>
      <input
        type="text"
        v-model="name"
        class="ml-4 px-2 py-1 rounded text-gray-700"
      />
      <button @click="useMixin" class="btn ml-4">Use Mixin</button>
    </div>
    <div class="mt-2">{{ result }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hMixin from "../mixins/mixin";

export default defineComponent({
  name: "Mixin",
  mixins: [hMixin],
  data() {
    return { name: "", result: "" };
  },
  methods: {
    useMixin: function () {
      this.result = this.$callMixin(this.name);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
