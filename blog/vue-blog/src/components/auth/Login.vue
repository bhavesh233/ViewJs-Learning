<template>
  <div>
    <the-header></the-header>

    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section style="background-color: #508bfc;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>
                <form @submit.prevent="submitForm">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="typeEmailX-2">Email</label>
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="password"
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
                  style="background-color: green;"
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
      error: null,
      email: '',
      password: '',
      login: false,
    }
  },
  methods: {
    async submitForm() {
      const data = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('fetchData/login', data)
        this.$router.replace('/home')
      } catch (error) {
        this.error = 'Failed to authenticate. Check your Login data.'
      }
    },
    handleError() {
      this.error = null
    },
  },
}
</script>
