const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    result() {
      console.log("COMPUTED");
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    result() {
      {
        console.log("watcher");
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    add(num) {
      console.log("add");
      this.counter += num;
    },
  },
}).mount("#assignment");
