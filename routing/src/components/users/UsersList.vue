<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">save Changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changedSaved: false,
    };
  },
  
  inject: ['users'],
  methods: {
    saveChanges() {
      this.changedSaved = true;
    },
    confirmInput() {
      this.$router.push('/teams');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('userList beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changedSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('are you sure ?');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('Unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
