import { createApp } from "vue";
import App from "./App.vue";
import ContactValue from "./components/ContactValue";
import NewFriend from "./components/NewFriend"


const app = createApp(App);

app.component("contact-vue", ContactValue);
app.component('new-friend',NewFriend)

app.mount("#app");
