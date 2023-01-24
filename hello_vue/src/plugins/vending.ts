import { Plugin } from "vue";

export const vendingPlugin: Plugin = {
  install(app, options?) {
    app.config.globalProperties.$pick = (key: number) => {
      return options[key];
    };
    app.provide("vending", options);
  },
};
