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
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ list.title }}</h5>
          </div>
          <p class="mb-1">{{ list.discription }}</p>
          <p class="mb-1">{{ list.selectedLanguage }}</p>
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
      // listData: null,
    }
  },
  computed: {
    listData() {
      return this.$store.getters.fetchBlogData
    },
    isLogin() {
      const login = this.$store.getters['fetchData/isLogin']
      if (login) {
        return '/new-blog'
      } else {
        return '/login'
      }
    },
  },
}
</script>
