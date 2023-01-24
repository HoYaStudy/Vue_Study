export default {
  methods: {
    $callMixin(name: string): string {
      return `Hello, ${name}`;
    },
  },
  beforeMount(): void {
    console.log("beforeMount in mixin");
  },
  mounted(): void {
    console.log("mounted in mixin");
  },
  beforeUnmount(): void {
    console.log("beforeMount in mixin");
  },
  unmounted(): void {
    console.log("unmounted in mixin");
  },
};
