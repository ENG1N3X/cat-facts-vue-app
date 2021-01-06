<template>
	<div class="favorites-page">
        <div class="hero">
            <h1>Favorites facts</h1>
        </div>
		<div class="data-items" v-if="favFacts.length != 0">
			<app-list-data-item v-for="item in favFacts" :key="item._id" :item="item" />
		</div>
        <p class="no-facts" v-else>
            No favorites facts
        </p>
	</div>
</template>

<script>
import AppListDataItem from "@/components/ListData/Item.vue";

export default {
	name: "Favorites",
	components: {
		AppListDataItem,
	},
	computed: {
		favFacts() {
			return this.$store.getters["favArr"];
		},
	},
};
</script>
