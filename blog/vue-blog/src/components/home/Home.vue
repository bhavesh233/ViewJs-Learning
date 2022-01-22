<template>
  <div>
    <div class="list-group">
      <div>
        <div>
          <router-link to="/new-blog" class="btn btn-primary">
            Write Somethihng to Better World
          </router-link>
        </div>
      </div>
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // listData: null,
    };
  },
  computed: {
    listData() {
      console.log(this.$store.getters.fetchBlogData);
      return this.$store.getters.fetchBlogData;
    },
  },
};
</script>
