const app = Vue.createApp({
  data() {
    return {
      name: "",
      toggleSelcted: false,
    };
  },
  computed: {
    selctedClass() {
      return {
        user1: this.name === "user1",
        user2: this.name === "user2",
        //     visible: this.toggleSelcted,
        //     hidden: !this.toggleSelcted,
      };
    },
    onToggleClass() {
      // console.log("hello");
      if (this.toggleSelcted) {
        //   console.log("y");
        return { visible: true };
      } else {
        return { hidden: true };
      }
    },
  },
  methods: {
    onToggle() {
      this.toggleSelcted = !this.toggleSelcted;
    },
  },
}).mount("#assignment");
