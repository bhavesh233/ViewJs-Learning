<template>
  <div>
    <!-- <button @click="increment">Add 1</button
    ><button @click="increase({ value: 11 })">Add 11</button> -->

    <button @click="inc">Add 1</button
    ><button @click="increase({ value: 11 })">Add 11</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']), also use
    ...mapActions('numbers',{
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
