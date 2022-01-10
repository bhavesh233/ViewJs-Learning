<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phone", "email", "isFavorite"],
  emits: ["toggle-favorite", "delete"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, //here use function
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      //   console.log(this.name);
    },
    toggleFavorite() {
      //   this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<style></style>
