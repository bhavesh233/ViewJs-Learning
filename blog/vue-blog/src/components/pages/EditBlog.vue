<template>
  <div>
    <teleport to="body">
      <div v-if="show" @click="tryClose" class="backdrop"></div>
      <transition name="dialog">
        <dialog open v-if="show">
          <header>
            <slot name="header">
              <h2>{{ title }}</h2>
            </slot>
          </header>
          <section>
            <slot>
              <form @submit.prevent="submitForm">
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <div class="row">
                      <div class="col-md-12 mb-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label">Title</label>
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            v-model.trim="titles"
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
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select Language
                      </button>
                      <ul class="dropdown-menu checkbox-menu allow-focus">
                        <li>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="SPRING"
                              name="selectedLanguage"
                              v-model.trim="selectedLanguage"
                            />
                            <label class="form-check-label">SPRING</label>
                            <br />
                          </div>
                        </li>
                        <li>
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
                        </li>

                        <li>
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
                        </li>

                        <li>
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
                        </li>
                      </ul>
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
                      <button type="submit" class="btn btn-warning btn-lg ms-2">
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </slot>
          </section>
          <menu v-if="!fixed">
            <slot name="actions">
              <base-button @click="tryClose">Close</base-button>
            </slot>
          </menu>
        </dialog>
      </transition>
    </teleport>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["close"],
  data() {
    return {
      editData: [],
      titles: "",
      img: "",
      discription: "",
      selectedLanguage: [],
      author: this.$store.getters["auth/isAuthor"],
    };
  },
  // mounted() {
  //   this.editData = this.$store.getters.fetEditData;
  //   console.log(this.editData);
    
  //   this.img = this.editData[0].image;
  //   this.discription = this.editData[0].discription;
  // },

  methods: {
    async submitForm() {
      this.editData = this.$store.getters.fetEditData;
      if (this.$store.getters.isUpdate) {
        const data = {
          id: this.editData[0].id,
          title: this.titles,
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
      }
    },

    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
