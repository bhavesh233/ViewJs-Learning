<template>
  <section>
    <ul>
      <li>
        <strong>Name:</strong>
        {{ name }}
      </li>
      <li>
        <strong>Age:</strong>
        {{ age }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
