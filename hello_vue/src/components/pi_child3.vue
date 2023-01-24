<template>
  <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">PI Child3</h2>
  <div>{{ result }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "PIChild3",
  setup() {
    const result = inject("result");
    return { result };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
