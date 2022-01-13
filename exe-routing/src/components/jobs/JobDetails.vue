<template>
  <div>
    <table style="margin-left: 200px">
      <tr>
        <th>ID</th>
        <th>FullName</th>
        <th>Role</th>
        <th>Time</th>
      </tr>

      <tr v-if="createPost">
        <td>{{ job.id }}</td>
        <td>{{ job.fullName }}</td>
        <td>{{ job.role }}</td>
        <td>{{ job.time }}</td>
        <td><button @click="editJobsDetails(job.id)">edit</button></td>
      </tr>
      <tr v-else v-for="job in jobs" :key="job.id">
        <td>{{ job.id }}</td>
        <td>{{ job.fullName }}</td>
        <td>{{ job.role }}</td>
        <td>{{ job.time }}</td>
        <td><button @click="editJobsDetails(job)">edit</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {},
      createPost: true,
    };
  },
  props: ["jobId"],
  inject: ["jobs", "editJobsDetails"],
  emits: ["editJob"],
  methods: {
    loadDetail(id) {
      // console.log(id);
      this.job = this.jobs.find((j) => {
        return j.id === id;
      });
      console.log(this.job);
    },
  },
  created() {
    this.loadDetail(this.jobId);
  },
  watch: {
    jobId(id) {
      this.loadDetail(id);
    },
  },
};
</script>
