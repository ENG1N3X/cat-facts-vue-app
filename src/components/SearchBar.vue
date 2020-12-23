<template>
	<div class="search-bar">
		<label for="search-bar__input">{{ searchLabel }}</label>
		<input v-model="searchValue" v-on:keyup.enter="getSearchValue(searchValue)" type="text" id="search-bar__input" class="search-bar__input" placeholder="cat" minlength="1" maxlength="24" />
		<span class="search-status">{{ showStatus }}</span>
	</div>
</template>

<script>
export default {
	name: "SearchBar",
	data() {
		return {
			searchLabel: "Search by animal (cat, dog, horse, snail)",
			searchValue: "",
		};
	},
	computed: {
		showStatus() {
			return this.$store.getters["error"];
		},
	},
	methods: {
		async getSearchValue(value) {
			if (value.length > 0) {
				try {
					await this.$store.dispatch("getFactsByType", value.toLowerCase());
				} catch (error) {
					alert(error);
					console.error(error);
				}
			}
		},
	},
};
</script>
