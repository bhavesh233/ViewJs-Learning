<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">go to t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  props: ['teamId'],
  methods: {
    loadTeamMebers(teamId) {
      // const teamId = route.params.teamId; //normal way this.$route.params.teamId;
      console.log(teamId);
      if (teamId) {
        const selectedTeam = this.teams.find((team) => team.id === teamId);
        const members = selectedTeam.members;
        const selectedMembers = [];
        for (const member of members) {
          const selectedUser = this.users.find((user) => user.id === member);
          selectedMembers.push(selectedUser);
        }
        this.teamName = selectedTeam.name;
        this.members = selectedMembers;
      }
    },
  },
  created() {
    // this.loadTeamMebers(this.$route);
    this.loadTeamMebers(this.teamId);
    // console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('teamMembers cmp');
    console.log(to, from);
    next();
  },
  watch: {
    teamId(id) {
      this.loadTeamMebers(id);
      // console.log(this.$route.query);
    },
    // $route(newRoute) {
    //   console.log(typeof newRoute); //object
    //   this.loadTeamMebers(newRoute);
    // },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
