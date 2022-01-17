<template>
  <div>
    <p>do more....</p>
    <h3>{{ counter }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
