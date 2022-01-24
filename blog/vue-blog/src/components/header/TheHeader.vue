<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand me-2">
          <img
            src="https://www.nicepng.com/png/detail/769-7695772_sample-blog-icon-org2x-cms-made-simple-logo.png"
            height="40"
            alt="Blog"
            loading="lazy"
            style="margin-top: -1px"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li>
              <router-link :to="loggedIn" class="nav-link">MyBlogs</router-link>
            </li>
          </ul>

          <div v-if="!isLogeed" class="d-flex align-items-center">
            <button
              type="button"
              class="btn btn-primary me-3"
              @click="loginClick"
            >
              Login
            </button>

            <button
              type="button"
              class="btn btn-dark px-3"
              @click="singupMethod"
            >
              Sign up for free
            </button>
          </div>
          <div v-if="isLogeed" class="d-flex align-items-center">
            <div style="color: red">{{ author }}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" @click="logout" class="btn btn-primary me-3">
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      isLogeed: false,
    };
  },
  methods: {
    loginClick() {
      this.$router.push("/login");
    },
    singupMethod() {
      this.$router.push("/signup");
    },
    logout() {
      this.$store.dispatch("auth/logout");

      this.isLogeed = this.$store.getters["auth/isLogin"];
      this.$router.replace("/home");
    },
  },
  computed: {
    loggedIn() {
      if (this.isLogeed) {
        return "/my-blogs";
      } else {
        return "/login";
      }
    },
  },
  mounted() {
    this.isLogeed = this.$store.getters["auth/isLogin"];

    if (this.isLogeed) {
      this.author = this.$store.getters["auth/isAuthor"];
    }
  },
};
</script>
