const apps = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "bhavesh",
          phone: "12323243242",
          email: "abc123@gmail.com",
        },
        {
          id: "2",
          name: "tulesh",
          phone: "987654321",
          email: "tulesh123@gmail.com",
        },
      ],
      detailAreVisible: false,
    };
  },
  methods: {
    toggleEvent() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

apps.component("friend-contact", {
  template: `  <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleEvent">
    {{detailAreVisible?'Hide':'Show'}} Details
  </button>
  <ul v-if="detailAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>`,

  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "2",
        name: "tulesh",
        phone: "987654321",
        email: "tulesh123@gmail.com",
      },
    };
  },

  methods: {
    toggleEvent() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

apps.mount("#app");
