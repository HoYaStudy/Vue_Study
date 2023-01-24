import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import hMixin from "./mixins/mixin";
import { vendingPlugin } from "./plugins/vending";

const vendingMachine = {
  1: "apple",
  2: "banana",
  3: "cherry",
};

createApp(App)
  .directive("focus", {
    mounted: (el: HTMLElement) => el.focus(),
  })
  .use(vendingPlugin, vendingMachine)
  .mixin(hMixin)
  .mount("#app");
