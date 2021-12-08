<template>
	<div class="universitiesScreen">
		<div class="divPopularUniversities">
			<p class="desktopSubtitle title">Universitas populer</p>
			<div class="listPopularUniversities">
				<div :key="index - 1" v-for="index in listPopularUniversities.length" class="listItemPopularUniversities">
					<p>{{listPopularUniversities[index - 1]['universityName']}}</p>
					<svg @click="onMinusClick(index - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle">
						<circle cx="12" cy="12" r="10" />
						<line x1="8" y1="12" x2="16" y2="12" />
					</svg>
				</div>
			</div>
		</div>
		<div class="divUniversities">
			<p class="desktopSubtitle title">Semua universitas</p>
			<div class="listUniversities">
				<div :key="index - 1" v-for="index in listUniversities.length" class="listItemUniversities">
					<p>{{listUniversities[index - 1]['universityName']}}</p>
					<svg @click="onPlusClick(index - 1)" v-if="listUniversities[index - 1]['popular'] !== 'true'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="8" x2="12" y2="16" />
						<line x1="8" y1="12" x2="16" y2="12" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {universitiesApi} from "@/assets/js/apiUrl";

	export default {
		name: 'UniversitiesScreenDashboard',
		data() {
			return {
				listPopularUniversities: [],
				listIdUniversities: [],
				listUniversities: [],
			}
		},
		beforeMount() {
			this.fetchPopularUniversitiesFromDatabase()
			this.fetchUniversitiesFromDatabase()
		},
		methods: {
			fetchPopularUniversitiesFromDatabase() {
				this.axios.post(
					universitiesApi,
					{
						'request': 'query-list',
						'sql': `SELECT id, universityName, popular FROM university WHERE popular = 'true'`
					},
					{headers: {'Content-Type': 'text/plain'}}
				).then(result => {
					this.listPopularUniversities = result.data
				})
			},
			fetchUniversitiesFromDatabase() {
				this.axios.post(
					universitiesApi,
					{
						'request': 'query-list',
						'sql': `SELECT id, universityName, popular FROM university`
					},
					{headers: {'Content-Type': 'text/plain'}}
				).then(async result => {
					result.data.forEach(item => {
						this.listIdUniversities.push(item['id'])
						this.listUniversities.push(item)
					})
				})
			},
			onPlusClick(_index) {
				let _id = this.listUniversities[_index]['id']
				this.axios.post(
					universitiesApi,
					{
						'request': 'query',
						'sql': `UPDATE university SET popular = 'true' WHERE id = '${_id}'`
					},
					{headers: {'Content-Type': 'text/plain'}}
				).then(result => {
					if (result.data === 1) {
						/* update list universities */
						this.listUniversities[_index]['popular'] = 'true'

						/* add data to list popular universities */
						this.listPopularUniversities.push(this.listUniversities[_index])
					}
				})
			},
			onMinusClick(_index) {
				let _id = this.listPopularUniversities[_index]['id']
				this.axios.post(
					universitiesApi,
					{
						'request': 'query',
						'sql': `UPDATE university SET popular = 'false' WHERE id = '${_id}'`
					},
					{headers: {'Content-Type': 'text/plain'}}
				).then(result => {
					if (result.data === 1) {
						/* update all university data */
						let _a = this.listIdUniversities.indexOf(_id)
						if (_a !== -1) {
							this.listUniversities[_a]['popular'] = 'false'
						}

						/* delete data from popular list */
						this.listPopularUniversities.splice(_index, 1)
					}
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	@import "../../utils/styles/globalStyle";

	.universitiesScreen {
		height: 100vh;
		overflow-y: scroll;
		padding: 2em 8%;
		box-sizing: border-box;
		.title {
			font-family: 'Montserrat', sans-serif;
		}
		.listPopularUniversities, .listUniversities {
			margin-top: 1em;
		}
		.divUniversities {
			margin-top: 3.2em;
		}
		.listItemPopularUniversities, .listItemUniversities {
			background-color: $colorCream;
			margin-top: .32em;
			padding: 1em 1.16em;
			display: flex;
			transition: box-shadow 250ms linear;
			p {
				flex: 1;
				user-select: none;
			}
			svg {
				stroke: rgba(0, 0, 0, .7);
				height: 1.16em;
				width: 1.16em;
			}
			&:hover {
				transition: box-shadow 250ms linear;
				box-shadow: 0 0 1em rgba(0, 0, 0, .08);
			}
			&:first-child {
				margin-top: 0;
			}
		}
	}
</style>
