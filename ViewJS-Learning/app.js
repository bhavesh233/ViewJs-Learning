Vue.createApp({
  data() {
    return {
      goals: [],
      enterValue: "",
    };
  },
  methods: {
    addGoal() {
      console.log(a1);
      this.goals.push(this.enterValue);
      this.enterValue = "";
      console.dir(this.$refs.userText);
    },
  },
}).mount("#app");
