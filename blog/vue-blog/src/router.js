import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/auth/Login.vue";
import SignupComponent from "./components/auth/Signup.vue";
import HomeComponent from "./components/home/Home.vue";
import NotFound from "./components/notFound/NotFound.vue";
import NewBlogComponent from "./components/pages/NewBlog.vue";
import BlogDetailComponent from "./components/pages/BlogDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/signup", component: SignupComponent },
    { path: "/new-blog", component: NewBlogComponent },
    {
      path: "/blog-detail/:id",
      component: BlogDetailComponent,
      props: true,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
