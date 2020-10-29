<template>
	<div>
		<h1>{{ page.title }}</h1>
		<div class="data-items">
			<app-list-data-item v-for="dataItem in data" :key="dataItem._id" :dataItem="dataItem"/>
		</div>
	</div>
</template>

<script>
import AppListDataItem from "@/components/ListData/Item.vue"

export default {
	name: "Index",
	data() {
		return {
			"page": {
				"title": "Cat facts"
			},
		}
	},
	components: {
		AppListDataItem
	},
	mounted() {
		if (!this.$store.getters['data'].length) {
			this.$store.dispatch('getData')
      	}
	},
	computed: {
		data()	{
			console.log("Setting data", this.$store.getters['data'])
			return this.$store.getters['data']
		}
	}
}
</script>
