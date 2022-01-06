const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmName:''
    };
  },
  methods: {
    onShowMeassage() {
      alert("this is VueEventMethod");
    },
    setParagraph(event) {
      this.name = event.target.value;
    },
    onClickEnter() {
      this.confirmName =this.name;
    },
  },
}).mount("#assignment");
