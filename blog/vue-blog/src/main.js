import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import EditBlog from "./components/pages/EditBlog.vue";
import CKEditor from "@ckeditor/ckeditor5-vue"; 
import Datepicker from 'vuejs3-datepicker';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";

const app = createApp(App);
app.use(i18n);

app.use(CKEditor);
app.component("datepicker",Datepicker)
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("edit-popup", EditBlog);
app.component("base-dialog", BaseDialog);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.use(router);
app.use(store);

app.mount("#app");
