import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/auth/Login.vue";
import SignupComponent from "./components/auth/Signup.vue";
import HomeComponent from "./components/home/Home.vue";
import NotFound from "./components/notFound/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/signup", component: SignupComponent },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
