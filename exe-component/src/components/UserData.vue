<template>
  <form @submit.prevent="sumbitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>

    <div>
      <label>Age</label>
      <input type="number" v-model="age" />
    </div>

    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-data"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    sumbitData() {
        
      this.$emit("add-data", this.name, this.age);
    },
  },
};
</script>

<style></style>
