<template>
  <div>
    <the-header></the-header>
    <br>
    <datepicker></datepicker>
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
    <div class="ex1">
      <div>
        <div v-for="list in listData" :key="list.id">
          <router-link
            :to="'/blog-detail/' + list.id"
            class="list-group-item"
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
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      date: new Date(),
      listData: this.$store.getters.fetchBlogData,
      renderList: null,
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
    let count = 0;
    let data = [];
    this.listData.filter((s) => {
      count++;
      if (count <= 5) {
        data.push(s);
      }
    });
    this.renderList = data;
  },
};
</script>

<style scoped>
div.ex1 {
  background-color: lightblue;
  margin: auto;
  width: 1000px;
  height: 500px;
  overflow: scroll;
}
</style>
