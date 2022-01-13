<template>
  <div>
    <div style="margin: 0px">
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="id">Id</label>
          <input name="id" type="text" ref="name" v-model="id" />
        </div>
        <div class="form-control">
          <label for="FullName">FullName</label>
          <input name="FullName" type="text" ref="name" v-model="fullName" />
        </div>
        <div class="form-control">
          <label for="role">Role</label>
          <input name="role" type="text" ref="role" v-model="role" />
        </div>

        <button type="submit">Posts</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      savePost: {},
      id: "",
      fullName: "",
      role: "",
    };
  },
  inject: ["jobs"],
  provider() {
    return {
      editJobsDetails: this.editData,
    };
  },
  emits: ["savePost"],
  methods: {
    submitForm() {
      console.log(this.savePost);
      this.savePost.id = this.id;
      (this.savePost.fullName = this.fullName),
        (this.savePost.role = this.role);
      this.savePost.time = new Date().toISOString();
      console.log(this.savePost);
      this.$emit("savePost", this.savePost);
      this.savePost = {};
    },
    editData(id) {
      console.log(id);
    },
  },
};
</script>

<style>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
