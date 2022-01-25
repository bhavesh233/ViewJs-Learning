import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/auth/Login.vue";
import SignupComponent from "./components/auth/Signup.vue";
import HomeComponent from "./components/home/Home.vue";
import NotFound from "./components/notFound/NotFound.vue";
import NewBlogComponent from "./components/pages/NewBlog.vue";
import BlogDetailComponent from "./components/pages/BlogDetail.vue";
import MyBlogsComponent from "./components/pages/MyBlogs.vue";
import EditBlogComponent from "./components/pages/EditBlog.vue";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/signup", component: SignupComponent },
    { path: "/edit-blog", component: EditBlogComponent },
    {
      path: "/my-blogs",
      component: MyBlogsComponent,
      meta: { requiresAuth: true },
    },
    {
      path: "/new-blog",
      component: NewBlogComponent,
      meta: { requiresAuth: true },
    },
    {
      path: "/blog-detail/:id",
      component: BlogDetailComponent,
      props: true,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _from, next) {
  if (to.meta.requiresAuth && !store.getters["auth/isLogin"]) {
    next(false);
  } else {
    next();
  }
});

export default router;
