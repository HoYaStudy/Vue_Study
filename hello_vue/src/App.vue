<template>
  <div class="my-4 flex justify-center items-center">
    <div class="mr-4">Menu</div>
    <select
      name="menu"
      id="menu"
      v-model="menu"
      class="px-2 py-1 rounded outline-none text-gray-700"
    >
      <option value="variable">Variable and Data Types</option>
      <option value="bind">Bind</option>
      <option value="model">Model</option>
      <option value="event">Event</option>
      <option value="condition">If</option>
      <option value="loop">For</option>
      <option value="computed">Computed/Watch</option>
      <option value="communication">Communication</option>
      <option value="slot">Slot</option>
      <option value="provide">Provide/Inject</option>
      <option value="custom">Custom Directive</option>
      <option value="plugin">Plugin</option>
      <option value="composition">Composition API</option>
      <option value="mixin">Mixin</option>
    </select>
  </div>
  <hr />
  <div v-if="menu === 'variable'"><VariableDataTypes /></div>
  <div v-else-if="menu === 'bind'"><vBind /></div>
  <div v-else-if="menu === 'model'"><vModel /></div>
  <div v-else-if="menu === 'event'"><vOn /></div>
  <div v-else-if="menu === 'conditino'"><vIf /></div>
  <div v-else-if="menu === 'loop'"><vFor /></div>
  <div v-else-if="menu === 'computed'"><ComputedWatch /></div>
  <div
    v-else-if="menu === 'communication'"
    class="flex flex-col justify-center items-center"
  >
    <Communication
      msg1="1"
      :msg2="1"
      prop1="1"
      prop2="2"
      prop5="success"
      ref="child_component"
      @send-event="sendEventFromChild"
    />
    <hr class="w-full" />
    <button @click="sendEventFromParent" class="mt-4 btn">
      Parent (Event)
    </button>
    <button @click="sendDataFromParent" class="mt-4 btn">Parent (Data)</button>
  </div>
  <div v-else-if="menu === 'slot'"><UseSlot /></div>
  <div v-else-if="menu === 'provide'"><ProvideInject /></div>
  <div v-else-if="menu === 'custom'"><CustomDirective /></div>
  <div v-else-if="menu === 'plugin'"><Plugin /></div>
  <div v-else-if="menu === 'composition'"><CompositionAPI /></div>
  <div v-else-if="menu === 'mixin'"><Mixin /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VariableDataTypes from "./components/variable_data_types.vue";
import vBind from "./components/v-bind.vue";
import vModel from "./components/v-model.vue";
import vOn from "./components/v-on.vue";
import vIf from "./components/v-if.vue";
import vFor from "./components/v-for.vue";
import ComputedWatch from "./components/computed_watch.vue";
import Communication from "./components/communication.vue";
import UseSlot from "./components/use_slot.vue";
import ProvideInject from "./components/provide_inject.vue";
import CustomDirective from "./components/custom_directive.vue";
import Plugin from "./components/plugin.vue";
import CompositionAPI from "./components/composition_api.vue";
import Mixin from "./components/mixin.vue";

export default defineComponent({
  name: "App",
  components: {
    VariableDataTypes,
    vBind,
    vModel,
    vOn,
    vIf,
    vFor,
    ComputedWatch,
    Communication,
    UseSlot,
    ProvideInject,
    CustomDirective,
    Plugin,
    CompositionAPI,
    Mixin,
  },
  data: function () {
    return {
      menu: "variable",
    };
  },
  methods: {
    sendEventFromParent: function () {
      // (
      //   (this.$refs.child_component as InstanceType<typeof Communication>).$refs
      //     .btnFromParent as HTMLButtonElement
      // ).click();
      (
        this.$refs.child_component as InstanceType<typeof Communication>
      ).fromParent();
    },
    sendDataFromParent: function () {
      (
        this.$refs.child_component as InstanceType<typeof Communication>
      ).child_data = "Modified by Parent";
    },
    sendEventFromChild: function (msg: string) {
      console.log(msg);
    },
  },
});
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #282a2e;
  color: #c5c8c6;
}

body {
  background-color: #282a2e;
}

.btn {
  @apply px-2 py-1 rounded text-gray-600 bg-green-400 hover:bg-green-200 focus:outline-none;
}
</style>
