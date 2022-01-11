<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google will add",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addStoreData: this.addData,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addData(title, des, link) {
      const add = {
        id: new Date().toISOString(),
        title: title,
        description: des,
        link: link,
      };
      this.storedResources.unshift(add);
      this.selectedTab = "stored-resources";
    },

    removeResource(resId) {
      console.log(resId);
      const resIndex = this.storedResources.findIndex(res => 
        res.id === resId
      );

      console.log(resIndex);
      console.log(this.storedResources);
      this.storedResources.splice(resIndex, 1);
      
    },
  },
};
</script>
