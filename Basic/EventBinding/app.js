const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmNameMethod() {
      this.confirmName = this.name;
    },
    submitForm(event) {
      //   event.preventDefault();
      alert("submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + "  " + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
}).mount("#events");
