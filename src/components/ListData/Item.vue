<template>
	<div class="data-item">
		<span class="type">Type: {{ data.type }}</span>
		<span class="text">{{ data.text }}</span>
		<span class="date">Created: {{ formatDate(data.createdAt) }}</span>
		<button :class="{ fav: data.isFav }" class="btn btn-fav" type="button" @click="toggleFav(data)">F</button>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "Item",
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	methods: {
		formatDate(value) {
			return moment(String(value)).format("hh:mm MM/DD/YYYY");
		},
		toggleFav(fact) {
			if (fact.isFav) {
				this.$store.commit("DELETE_FAV_ITEM", fact._id);
			} else {
				this.$store.commit("SET_FAV_ITEM", fact);
			}
			fact.isFav = !fact.isFav;
		},
	},
};
</script>
