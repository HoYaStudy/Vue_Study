<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="text-2xl font-medium text-green-400">Provide / Inject</h1>
    <PIChild1 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PIChild1 from "./pi_child1.vue";

export default defineComponent({
  name: "ProvideInject",
  components: { PIChild1 },
  data: () => {
    return { items: ["item1", "item2", "item3"] };
  },
  provide: function () {
    return {
      itemLength: this.items.length,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
