const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
      //   fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    //     name(value) {
    //       console.log("value is " + value);
    //       if (value === "") {
    //         this.fullName = "";
    //       } else {
    //         this.fullName = value + "  " + this.lastName;
    //       }
    //     },
    //     lastName(value) {
    //       if (value === "") {
    //         this.fullName = "";
    //       } else {
    //         this.fullName = this.name + "  " + value;
    //       }
    //     },
  },

  computed: {
    fullName() {
      console.log("running methods");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    fullOutputName() {
      //   console.log("running methods");
      //   if (this.name === "") {
      //     return "";
      //   }
      //   return this.name + " " + "tukadiya";
    },
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
    resetInput() {
      this.name = "";
    },
  },
}).mount("#events");
