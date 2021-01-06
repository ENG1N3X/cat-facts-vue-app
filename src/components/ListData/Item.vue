<template>
	<div class="data-item">
		<span class="type">the {{ item.type }} fact</span>
		<span class="text">{{ item.text }}</span>
		<span class="date">Created: {{ formatDate() }}</span>
		<button :class="{ fav: item.isFav }" class="btn btn-fav" type="button" @click="toggleFav">F</button>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "Item",
	props: {
		item: {
			type: Object,
			required: true,
		}
	},
	methods: {
		formatDate() {
			return moment(String(this.item.createdAt)).format("hh:mm MM/DD/YYYY");
		},
		toggleFav() {
			if (this.item.isFav) {
				this.$store.commit("DELETE_FAV_ITEM", this.item);
			} else {
				this.$store.commit("SET_FAV_ITEM", this.item);
			}
		},
	},
};
</script>
