<template>
  <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">PI Child2</h2>
  <div>{{ itemLength }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PIChild2",
  inject: ["itemLength"],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
