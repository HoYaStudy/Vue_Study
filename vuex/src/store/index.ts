import { createStore } from "vuex";

export interface IStore {
  count: number;
}

export default createStore<IStore>({
  state: () => {
    return { count: 0 };
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
  },
  getters: {
    square: (state) => {
      return state.count * state.count;
    },
  },
  actions: {
    increase: (context) => {
      context.commit("increase");
    },
    decrease: (context) => {
      context.commit("decrease");
    },
  },
  modules: {},
});
