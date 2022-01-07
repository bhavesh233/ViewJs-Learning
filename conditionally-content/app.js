const app = Vue.createApp({
  data() {
    return {
      enterValue: "",
      goals: [],
    };
  },
  methods: {
    onClickAdd() {
      this.goals.push(this.enterValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
}).mount("#user-goals");
