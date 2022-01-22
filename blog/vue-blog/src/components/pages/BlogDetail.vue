<template>
  <div>
    <img :src="data.image" alt="" />
    <ul>
      <li>{{ data.title }}</li>
      <li>{{ data.discription }}</li>
      <li>{{ data.selectedLanguage }}</li>
      <li>{{ data.author }}</li>
    </ul>
    <button class="btn btn-primary" @click="previousMethod">Previous</button
    ><button class="btn btn-primary" @click="nextMethod">Next</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      data: null,
      allData: null,
    };
  },
  created() {
    this.allData = this.$store.getters.fetchBlogData;
    this.data = this.$store.getters.fetchBlogData.find((s) => {
      return s.id === +this.id;
    });
  },

  methods: {
    previousMethod() {
      let index = this.allData.findIndex((s) => s.id === +this.data.id);

      index--;
      if (index < 0) {
        index = 0;
      }
      this.data = this.allData[index];
    },
    nextMethod() {
      let index = this.allData.findIndex((s) => s.id === +this.data.id);

      index++;
      if (index > this.allData.length - 1) {
        index = this.allData.length - 1;
      }
      console.log(index);
      this.data = this.allData[index];
    },
  },
};
</script>
