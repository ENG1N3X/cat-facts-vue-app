<template>
	<div class="data-item">
		<span class="type">Type: {{ data.type }}</span>
		<span class="text">{{ data.text }}</span>
		<span class="date">Created: {{ formatDate(data.createdAt) }}</span>
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
	},
};
</script>
