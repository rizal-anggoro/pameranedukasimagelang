<template>
	<div>
		{{source['title']}}
	</div>
</template>

<script>
	export default {
		name: "ListItemTest",
		props: {
			source: {
				type: Object,
				default() {
					return {

					}
				}
			}
		},
	}
</script>

<style scoped>

</style>
