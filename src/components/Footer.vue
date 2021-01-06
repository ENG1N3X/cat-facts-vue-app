<template>
  <footer>
        <span>Author {{ info.author }}</span>
        <a :href="info.github_url" target="_blank">Github {{ info.nickname }}</a>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            "info": {
                "author": "Yuriy K.",
                "nickname": "@eng1n3x",
                "github_url": "https://github.com/ENG1N3X"
            }
        }
    },
}
</script>