const app = Vue.createApp({
  data() {
    return {
      name: "bhavesh",
      age: 20,
      img:
        "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/vuejs1200.png",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
