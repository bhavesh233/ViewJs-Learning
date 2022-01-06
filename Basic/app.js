const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "finish the course and learn Vue",
      courseGoalB: "<h2>master bild project with Vue </h2>",
      vueLink: "https://vuejs.org/v2/guide/installation.html",
    };
  },
  methods: {
    outpulGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount("#user-goal");
