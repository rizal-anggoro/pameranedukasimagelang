<template>
	<div class="visitorScreenDashboard">
		<div class="divRange">
			<p class="desktopSubtitle title">Rentang waktu</p>
			<textarea v-model="dateRangeModel" class="desktopBody" placeholder="01-01-2020;02-01-2020" />
			<p @click="onClickButtonDateRange" class="desktopFillButton">Oke</p>
		</div>
	</div>
</template>

<script>
	import {headers} from "@/assets/js/apiUrl";
	import {settingApi} from "@/assets/js/apiUrl";

	export default {
		name: 'SettingScreenDashboard',
		data() {
			return {
				totalVisitor: 0,
				dateRangeModel: '',
			}
		},
		beforeMount() {
			this.fetchDateRangeFromDatabase()
		},
		methods: {
			async fetchDateRangeFromDatabase() {
				this.axios.post(
					settingApi,
					{
						'request': 'query-data',
						'sql': `SELECT data FROM setting where \`key\` = 'dateRange'`
					},
					{headers: headers},
				).then(result => {
					if (result.data['data'] !== null) {
						JSON.parse(result.data['data']).forEach(item => {
							this.dateRangeModel += `${item};`
						})
						if (this.dateRangeModel.length > 0) {
							this.dateRangeModel = this.dateRangeModel.substr(
								0, this.dateRangeModel.length - 1)
						}
					}
				})
			},
			onClickButtonDateRange() {
				let _range = this.dateRangeModel
				if (_range.length > 0) {
					let _listDate = []
					_range.split(';').forEach(item => {
						_listDate.push(item)
					})

					let _jsonList = JSON.stringify(_listDate)

					/* update database */
					this.axios.post(
						settingApi,
						{
							'request': 'query',
							'sql': `UPDATE setting SET data = '${_jsonList}' WHERE \`key\` = 'dateRange'`
						},
						{headers: {'Content-Type': 'text/plain'}},
					).then(result => {
						if (result.data === 1) {
							alert('Rentang waktu berhasil diubah!')
						}
					})
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	.visitorScreenDashboard {
		padding: 2em 8%;
		box-sizing: border-box;
		.title { font-family: 'Montserrat', sans-serif; }
		.divRange {
			textarea {
				margin-top: 1em;
				padding: .64em 1.16em;
				width: 100%;
				resize: none;
				background-color: rgba(0, 0, 0, .04);
				border: none;
				outline: none;
			}
			.desktopFillButton {
				margin-top: .64em;
			}
		}
	}
</style>
