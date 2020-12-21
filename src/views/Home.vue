<template>
  <div class="home-page">
    <app-list-data />
  </div>
</template>

<script>
import AppListData from "@/components/ListData/Index.vue";

export default {
  name: "Home",
  components: {
    AppListData
  },
};
</script>
