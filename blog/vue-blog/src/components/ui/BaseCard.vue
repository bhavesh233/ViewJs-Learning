<template>
  <div class="card" style="background-color: rgba(0, 0, 128, 0.2)">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 30rem;
}
</style>