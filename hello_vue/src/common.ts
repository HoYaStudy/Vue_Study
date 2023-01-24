import { computed, ComputedRef, reactive, ToRefs, toRefs } from "vue";

type State = {
  num1: number;
  num2: number;
  result: ComputedRef;
};

export const addTwoNumbers = (): ToRefs => {
  const state: State = reactive<State>({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2),
  });
  return toRefs(state);
};
