<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'bhavesh',
      age: 20,
    });
    setTimeout(() => {
      user.name = 'BHAV';
      user.age = 32;
    }, 2000);
    return { user: user };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
