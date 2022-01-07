const app = Vue.createApp({
  data() {
    return {
      enterValue: "",
      goals: [],
      toggleView: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.toggleView ? "Hide" : "Show";
    },
  },
  methods: {
    onAdd() {
      this.goals.push(this.enterValue);
    },
    toggleEvent() {
      this.toggleView = !this.toggleView;
    },
  },
}).mount("#assignment");
