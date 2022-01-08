const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("beforeCreated() called");
  },
  created() {
    console.log("create() called");
  },
  beforeMount() {
    console.log("beforeMount() called");
    console.log("Hello");
  },
  mounted() {
    console.log("messaege");
    console.log("mount() called");
  },
  beforeUpdate() {
    console.log("beforeUpdate() called");
    console.log("update");
  },
  updated() {
    console.log("update() called");
    console.log("update called");
  },
  beforeUnmount() {
    console.log("beforeUnmount called");
  },
  unmounted() {
    console.log("Unmount called");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 2000);
