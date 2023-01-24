<template>
  <PIChild2 />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PIChild2 from "./pi_child2.vue";

export default defineComponent({
  name: "PIChild1",
  components: { PIChild2 },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
