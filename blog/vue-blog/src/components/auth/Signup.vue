<template>
  <div>
    <section
      class="bg-image"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
      "
    >
      <div class="mask d-flex align-items-center gradient-custom-3">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form @submit.prevent="submitForm">
                    <div class="form-outline mb-4">
                      <label class="form-label">Full Name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model.trim="fullName"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        v-model.trim="email"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model.trim="username"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        v-model.trim="password"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        v-model.trim="confirmPassword"
                      />
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Singup
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                    </p>

                    <router-link
                      class="btn btn-lg btn-block btn-primary"
                      style="background-color: blue"
                      to="/signup"
                      >Login here</router-link
                    >
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      const regNum = /[0-9]/;
      let findSpecialCharacter = false;
      let validFullName = false;
      const allSpecialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

      for (let i = 0; i < allSpecialCharacter.length; i++) {
        for (let j = 0; j < this.fullName.length; j++) {
          validFullName = this.fullName[j] === allSpecialCharacter[i];
          if (validFullName) {
            break;
          }
        }
        if (validFullName) {
          break;
        }
      }
      for (let i = 0; i < allSpecialCharacter.length; i++) {
        findSpecialCharacter = this.email[0] === allSpecialCharacter[i];
        if (findSpecialCharacter) {
          break;
        }
      }

      const validiteValue =
        this.email.length < 10 ||
        this.email === "" ||
        !this.email.includes("@prominentpixel.com") ||
        !(this.password === this.confirmPassword) ||
        this.password === "" ||
        this.fullName.match(regNum) ||
        this.username[0].match(regNum) ||
        findSpecialCharacter ||
        validFullName;

      if (validiteValue) {
        return null;
      }
      console.log("hello");
    },
  },
};
</script>
