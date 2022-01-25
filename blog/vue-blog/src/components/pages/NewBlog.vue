<template>
  <div>
    <the-header></the-header>

    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div>
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col">
              <div class="card card-registration my-4">
                <form @submit.prevent="submitForm">
                  <div class="row g-0">
                    <div class="col-xl-5 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        class="img-fluid"
                        style="
                          border-top-left-radius: 0.25rem;
                          border-bottom-left-radius: 0.25rem;
                        "
                      />
                    </div>

                    <div class="col-xl-6">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-5 text-uppercase">CREATE NEW BLOG</h3>

                        <div class="row">
                          <div class="col-md-12 mb-12 mb-4">
                            <div class="form-outline">
                              <label class="form-label">Title</label>
                              <input
                                type="text"
                                class="form-control form-control-lg"
                                v-model.trim="title"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12 mb-4">
                          <div class="form-outline">
                            <label class="form-label">Discription</label>
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              v-model.trim="discription"
                            />
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label">image</label>
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model.trim="img"
                          />
                        </div>

                        <div class="row">
                          <div class="col-md-12 mb-6">
                            <label class="form-label">Select Language</label>
                            <br />
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="SPRING"
                                name="selectedLanguage"
                                v-model.trim="selectedLanguage"
                              />
                              <label class="form-check-label">SPRING</label>
                            </div>

                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="JAVA"
                                name="selectedLanguage"
                                v-model.trim="selectedLanguage"
                              />
                              <label class="form-check-label">JAVA</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="selectedLanguage"
                                value="C"
                                v-model.trim="selectedLanguage"
                              />
                              <label class="form-check-label">C</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="selectedLanguage"
                                value="C++"
                                v-model.trim="selectedLanguage"
                              />
                              <label class="form-check-label">C++</label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div class="form-outline mb-4">
                          <label class="form-label">Author</label>
                          <input
                            disabled
                            type="text"
                            class="form-control form-control-lg"
                            v-model="author"
                          />
                        </div>

                        <div class="justify-content-end pt-3">
                          <button
                            type="submit"
                            class="btn btn-warning btn-lg ms-2"
                          >
                            Publish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      editData: [],
      title: "",
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp",
      discription: "",
      selectedLanguage: [],
      author: this.$store.getters["auth/isAuthor"],
    };
  },
  created() {
    if (this.$store.getters.isUpdate) {
      this.editData = this.$store.getters.fetEditData;
      this.title = this.editData[0].title;
      this.img = this.editData[0].img;
      this.discription = this.editData[0].discription;
    }
  },
  methods: {
    async submitForm() {
      if (
        this.title === "" ||
        this.discription === "" ||
        this.img === "" ||
        this.selectedLanguage.length <= 0
      ) {
        this.error = "Please Valid Input";
        return null;
      }

      if (this.$store.getters.isUpdate) {
        
        const data = {
          id: this.editData[0].id,
          title: this.title,
          img: this.img,
          discription: this.discription,
          selectedLanguage: this.selectedLanguage,
          date: this.editData[0].date,
          author: this.author,
          email: this.$store.getters["auth/getEmail"],
        };

        await this.$store.commit("edit", data);
        this.$store.state.isUpdate = false;
        this.$router.replace("/home");
      } else {
        const date = new Date();
        let id = this.$store.getters.fetchBlogData.length;
        const data = {
          id: id,
          title: this.title,
          img: this.img,
          discription: this.discription,
          selectedLanguage: this.selectedLanguage,
          date: date,
          author: this.author,
          email: this.$store.getters["auth/getEmail"],
        };

        await this.$store.commit("addData", data);

        this.$router.replace("/home");
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
</style>
