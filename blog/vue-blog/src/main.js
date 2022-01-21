import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.use(router);
app.use(store);

app.mount("#app");
