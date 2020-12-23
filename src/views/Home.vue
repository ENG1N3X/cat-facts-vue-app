<template>
	<div class="home-page">
		<app-search-bar />
		<app-list-data />
	</div>
</template>

<script>
import AppListData from "@/components/ListData/Index.vue";
import AppSearchBar from "@/components/SearchBar.vue";

export default {
	name: "Home",
	components: {
		AppListData,
		AppSearchBar,
	},
};
</script>
