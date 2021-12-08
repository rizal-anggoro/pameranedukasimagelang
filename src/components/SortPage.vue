<template>
	<div class="sortPage">
		<button @click="sortUniversities">Sort universities</button>
	</div>
</template>

<script>
	import {queryApi} from "@/assets/js/apiUrl";
	import {headers} from "@/assets/js/apiUrl";

	export default {
		name: "SortPage",
		data() {
			return {
				listNameUniversities: [],
				index: 1,
			}
		},
		created() {
		},
		methods: {
			sortUniversities() {
				this.axios.post(
					queryApi,
					{
						'request': 'query-list',
						'sql': 'SELECT id, universityName FROM university',
					},
					{headers}
				).then(result => {
					this.listNameUniversities = result.data
					this.listNameUniversities.sort((a, b) => {
						if (a['universityName'] < b['universityName'])
							return -1;
						if (a['universityName'] > b['universityName'])
							return 1;
						return 0;
					})

					this.listNameUniversities.forEach(item => {
						let _id = item['id']
						this.axios.post(
							queryApi,
							{
								'request': 'query',
								'sql': `UPDATE university SET sort = '${this.index}' WHERE id = ${_id}`,
							},
							{headers}
						).then(result => {
							console.log(result.data['universityName'])
						})
						this.index++
					})
				})
			},
		},
	}
</script>

<style scoped>

</style>
