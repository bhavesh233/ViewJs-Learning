import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import JobLists from "./components/jobs/JobLists.vue";
import Login from "./components/login/Login.vue";
import JobDetails from "./components/jobs/JobDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/jobs",
      name: "jobs",
      component: JobLists,
      children: [
        {
          path: ":jobId",
          name: "jobDetail",
          component: JobDetails,
          props:true
        },
        
      ],
    },

    {
      path: "/login",
      component: Login,
    },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
