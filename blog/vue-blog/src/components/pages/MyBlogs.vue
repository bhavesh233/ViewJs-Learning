<template>
  <div>
    <the-header></the-header>
    <div class="list-group">
      <div v-for="list in myBlogsList" :key="list.id">
        <router-link
          :to="'/blog-detail/' + list.id"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <h5 class="mb-1">{{ list.title }}</h5>
          <p class="mb-1">{{ list.discription }}</p>
          <p class="mb-1">
            {{ list.selectedLanguage[0] }}&nbsp;&nbsp;{{
              list.selectedLanguage[1]
            }}&nbsp;{{ list.selectedLanguage[2] }}&nbsp;{{
              list.selectedLanguage[3]
            }}
          </p>
        </router-link>
        <button class="btn btn-primary" @click="editMethod(list.id)">
          Edit</button
        >&nbsp;<button class="btn btn-danger" @click="deletMethod(list.id)">
          Delete
        </button>
      </div>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      myBlogsList: [],
    };
  },
  created() {
    if (this.$store.getters["auth/isLogin"]) {
      this.author = this.$store.getters["auth/isAuthor"];
      this.myBlogsList = this.$store.getters.fetchBlogData.filter((s) => {
        return s.email === this.$store.getters["auth/getEmail"];
      });
    }
  },
  methods: {
    async editMethod(id) {
      let editData = this.$store.getters.fetchBlogData.filter((s) => {
        return s.id === id;
      });

      await this.$store.commit("editData", editData);
      this.$router.replace("/new-blog");
    },
    async deletMethod(id) {
      await this.$store.commit("deleteData", id);
      if (this.$store.getters["auth/isLogin"]) {
        this.author = this.$store.getters["auth/isAuthor"];
        this.myBlogsList = this.$store.getters.fetchBlogData.filter((s) => {
          return s.email === this.$store.getters["auth/getEmail"];
        });
      }
    },
  },
};
</script>
