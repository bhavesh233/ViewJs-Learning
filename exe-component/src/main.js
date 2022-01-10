import { createApp } from "vue";
import App from "./App.vue";
import UserData from "./components/UserData";
import ActiveUser from "./components/ActiveUser";

const app = createApp(App);

app.component("active-data", ActiveUser);
app.component("user-data", UserData);

app.mount("#app");
