<template>
  <div>
    <the-navigation></the-navigation>
    <main>
      <!-- <component :is="activePage"></component> -->
      <router-view></router-view>
      <!-- <post-jobs @savedPost="savePost"></post-jobs> -->
      <post-jobs @savePost="savePoste"></post-jobs>
    </main>
  </div>
</template>

<script>
import PostJobs from "./components/jobs/PostJobs.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
    PostJobs,
  },
  data() {
    return {
      showPost: true,
      jobs: [
        {
          id: "u1",
          fullName: "Max Schwarz",
          role: "Engineer",
          time: new Date().toISOString(),
        },
        {
          id: "u2",
          fullName: "Praveen Kumar",
          role: "Engineer",
          time: new Date().toISOString(),
        },
        {
          id: "u3",
          fullName: "Julie Jones",
          role: "Engineer",
          time: new Date().toISOString(),
        },
        {
          id: "u4",
          fullName: "Alex Blackfield",
          role: "Consultant",
          time: new Date().toISOString(),
        },
        {
          id: "u5",
          fullName: "Marie SmsavePostith",
          role: "Consultant",
          time: new Date().toISOString(),
        },
      ],
    };
  },

  provide() {
    return {
      jobs: this.jobs,
    };
  },
  methods: {
    savePoste(savePost) {
      const abc = savePost
      this.jobs.push(abc);
      console.log(this.jobs);
    },
  },
  watch: {
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
