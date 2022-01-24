<template>
  <div>
    <the-header></the-header>

    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section style="background-color: #508bfc">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>
                <form @submit.prevent="submitForm">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="typeEmailX-2"
                      >Email or Username</label
                    ><br />
                    <select class="select" v-model="selecteValue">
                      <option value="email">Email</option>
                      <option value="userName">Username</option>
                    </select>
                    <br /><br />

                    <input
                      type="email"
                      v-if="checkEmailorUserName"
                      class="form-control form-control-lg"
                      v-model="email"
                      placeholder="please enter email"
                    />
                    <input
                      type="text"
                      v-if="!checkEmailorUserName"
                      class="form-control form-control-lg"
                      v-model="username"
                      placeholder="please enter username"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="password"
                      placeholder="please enter password"
                    />
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <hr class="my-4" />

                <router-link
                  class="btn btn-lg btn-block btn-primary"
                  style="background-color: green"
                  to="/signup"
                >
                  create new account
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selecteValue: "email",
      error: null,
      username: "",
      email: "",
      password: "",
      login: false,
    };
  },
  computed: {
    checkEmailorUserName() {
      if (this.selecteValue === "email") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      await this.$store.dispatch("auth/login", data);
      if (this.$store.getters["auth/isLogin"]) {
        this.$router.replace("/home");
      } else {
        this.error = "Failed to authenticate. Check your Login data.";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
