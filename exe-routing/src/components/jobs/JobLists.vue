<template>
  <div>
    <button @click="toggleMethod">Hide/Show</button>
    <!-- <router-link to="/jobs/posts">Post Job</router-link> -->

    <ul v-if="isVisibleList">
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="'/jobs/' + job.id"> {{ job.fullName }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisibleList: true,
    };
  },
  inject: ["jobs"],
  methods: {
    toggleMethod() {
      this.isVisibleList = !this.isVisibleList;
    },
  },
  watch: {},
};
</script>
<style scoped>
ul {
  list-style: square;
  margin: 0;
  padding: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}
li:active,
li:hover,
li.active {
  color: red;
}

button {
  font: inherit;
  background-color: purple;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a {
  text-decoration: none;
  border-color: purple;
  font: inherit;
  border: 1px solid transparent;
  cursor: pointer;

  padding: 0.5rem 1.5rem;
  display: inline-block;
}
/* a.router-link-active  */
a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
