<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <h1 class="text-2xl font-medium text-green-400">Component</h1>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">props</h2>
    <div class="grid grid-cols-2">
      <div>msg1: {{ msg1 }}</div>
      <div>Types: {{ typeof msg1 }}</div>
      <div>msg2: {{ msg2 }}</div>
      <div>Types: {{ typeof msg2 }}</div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      props with properties
    </h2>
    <div class="grid grid-cols-2">
      <div>prop1</div>
      <div>{{ prop1 }}</div>
      <div>prop2</div>
      <div>{{ prop2 }}</div>
      <div>prop3</div>
      <div>{{ prop3 }}</div>
      <div>prop4</div>
      <div>{{ prop4 }}</div>
      <div>prop5</div>
      <div>{{ prop5 }}</div>
    </div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      event from the parent
    </h2>
    <button @click="fromParent" ref="btnFromParent" class="btn">Click</button>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      data from the parent
    </h2>
    <div>{{ child_data }}</div>

    <h2 class="mt-8 mb-2 text-xl font-medium text-green-600">
      event to the parent
    </h2>
    <button @click="toParent" class="btn">Click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Communication",
  props: {
    msg1: String,
    msg2: Number,
    prop1: [String, Number],
    prop2: { type: String, required: true },
    prop3: { type: Number, default: 7 },
    prop4: {
      type: Object,
      default: function () {
        return { value: "hello" };
      },
    },
    prop5: {
      validator: function (value: string) {
        return ["success", "failure"].indexOf(value) !== -1;
      },
    },
  },
  data: function () {
    return {
      child_data: "Hello",
    };
  },
  methods: {
    fromParent: function () {
      console.log("This event is from parent");
    },
    toParent: function () {
      this.$emit("send-event", "This event is from child");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
