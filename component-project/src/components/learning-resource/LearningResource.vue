<template>
  <div>
    <li>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <button>delete</button>
        </header>
      </div>
      <p>{{ description }}</p>
      <nav>
        <a :href="link"> View Resource </a>
      </nav>
    </li>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "link"],
};
</script>
