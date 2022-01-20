<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  computed: {
    didAutoLogout() {
      console.log('computed');
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(currentValue, oldValue) {
      // console.log("before if "+currentValue,oldValue);
      if (currentValue && currentValue !== oldValue) {
        // console.log(currentValue,oldValue);
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
