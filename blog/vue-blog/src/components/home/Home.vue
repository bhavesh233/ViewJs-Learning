<template>
  <div>
    <the-header></the-header>

    <br />

    <div class="position-relative">
      <div class="position-absolute">
        <router-link :to="isLogin" class="btn btn-primary">
          Write Somethihng to Better World
        </router-link>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="list-group">
      <div v-for="list in listData" :key="list.id">
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
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      listData: this.$store.getters.fetchBlogData,
    };
  },

  computed: {
    isLogin() {
      const login = this.$store.getters["auth/isLogin"];
      if (login) {
        return "/new-blog";
      } else {
        return "/login";
      }
    },
  },
  created() {
    this.listData = this.$store.getters.fetchBlogData;
  },
};
</script>
