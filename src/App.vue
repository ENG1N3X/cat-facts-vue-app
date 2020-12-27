<template>
	<div id="app" class="container">
		<nav class="nav">
			<router-link to="/">
				<img alt="logo" src="./assets/images/logo.jpg" />
			</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/favorites">Favorites</router-link>
			<a href="https://vuejs.org/" target="_blank">Docs Vue</a>
			<a href="https://github.com/ENG1N3X/vuejs-app-dmi" target="_blank">App Github</a>
		</nav>
		<router-view />
		<app-footer />
	</div>
</template>

<script>
import AppFooter from "@/components/Footer.vue";

export default {
	components: {
		AppFooter,
	},
};
</script>
