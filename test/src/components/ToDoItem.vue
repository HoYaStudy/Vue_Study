<template>
  <li :class="{ complete: item.complete }" @click="test">{{ item.title }}</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDoItem",
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    test() {
      this.$emit("melong", this.index);
    },
  },
});
</script>

<style>
.complete {
  text-decoration: line-through;
}
</style>
