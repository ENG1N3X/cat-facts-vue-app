<template>
	<div>
		<div class="hero">
			<h1>{{ page.title }}</h1>
			<select class="facts-filter" v-model="factsFilter.selected">
				<option v-for="option in factsFilter.options" :key="option" :value="option"> Type - {{ option }} </option>
			</select>
		</div>
		<div class="data-items">
			<app-list-data-item v-for="data in filteredData" :key="data._id" :data="data" />
		</div>
	</div>
</template>

<script>
import AppListDataItem from "@/components/ListData/Item.vue";

export default {
	name: "Index",
	data() {
		return {
			page: {
				title: "Some facts",
			},
			factsFilter: {
				selected: "all",
				options: ["all"],
			},
		};
	},
	components: {
		AppListDataItem,
	},
	computed: {
		filteredData() {
			const facts = this.$store.getters["factsArr"];
			this.getFilterOptions(facts);
			if (this.factsFilter.selected == "all") {
				return facts;
			} else {
				return facts.filter((fact) => {
					return fact.type.toLowerCase().includes(this.factsFilter.selected.toLowerCase());
				});
			}
		},
	},
	methods: {
		getFilterOptions(factsArray) {
			const facts = JSON.parse(JSON.stringify(factsArray));
			for (const fact of facts) {
				if (!this.factsFilter.options.includes(fact.type)) {
					this.factsFilter.options.push(fact.type.toLowerCase());
				}
			}
		},
	},
};
</script>
