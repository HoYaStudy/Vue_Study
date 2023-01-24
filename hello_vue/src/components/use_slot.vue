<template>
  <SlotLayout>
    <template v-slot:header>
      <div>Header</div>
    </template>
    <template v-slot:default>
      <div>Body</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>
  </SlotLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlotLayout from "./slot_layout.vue";

export default defineComponent({
  name: "UseSlot",
  components: { SlotLayout },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
