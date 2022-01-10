<template>
    <ul>
      <learning-resource
        v-for="res in storeResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      >
      </learning-resource>
    </ul>
  
</template>

<script>
import LearningResource from "./components/learning-resource/LearningResource.vue";

export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storeResources: [
        {
          id: "offcial-guide",
          title: "Official Guide",
          description: "the official vue.js documentations",
          link: "https://vue.js.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google",
          link: "https://google.org",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
