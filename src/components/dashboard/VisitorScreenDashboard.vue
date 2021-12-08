<template>
	<div class="visitorScreenDashboard">
		<p class="desktopSubtitle title">Grafik pengunjung</p>
		<div id="chart" />
		<div class="divUniversities">
			<p class="desktopSubtitle title">Semua universitas</p>
			<div class="listUniversities">
				<div @click="onClickListItemUniversities(index - 1)" :key="index - 1" v-for="index in listUniversities.length" class="listItemUniversities">
					<div class="divContent">
						<p class="desktopBody universityName">{{listUniversities[index - 1]['universityName']}}</p>
						<p class="desktopBody totalVisitor">{{listUniversities[index - 1]['totalVisitor']}}</p>
					</div>
					<div v-if="showDetailPosition === index - 1" class="divDetail">
						<p class="desktopBody title" style="font-weight: 600; color: black; margin-top: 1em;">Detail</p>
						<div :key="index1 - 1" v-for="index1 in listDetailVisitor.length" class="divVisitor">
							<p class="desktopBody date">{{listDateRange[index1 - 1]}}</p>
							<p class="desktopBody visitor">{{listDetailVisitor[index1 - 1]}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="divTool">
			<p @click="onClickButtonResetVisitor" class="desktopFillButton">Reset pengunjung</p>
			<p @click="onClickButtonRandomVisitor" class="desktopFillButton">Acak jumlah pengunjung</p>
		</div>
	</div>
</template>

<script>
	import {universitiesApi} from "@/assets/js/apiUrl";
	import {settingApi} from "@/assets/js/apiUrl";
	import {headers} from "@/assets/js/apiUrl";

	import Chart from "apexcharts";

	export default {
		name: 'VisitorScreenDashboard',
		data() {
			return {
				data: '',
				showDetailPosition: -1,
				listDateRange: [],
				listVisitor: [],
				listUniversities: [],
				listDetailVisitor: [],
				chart: null,
			}
		},
		beforeMount() {
			this.fetchDateRangeFromDatabase()
		},
		methods: {
			onClickListItemUniversities(_index) {
				if (this.showDetailPosition === _index) {
					this.showDetailPosition = -1
					this.listDetailVisitor = []
				} else {
					this.showDetailPosition = _index
					this.listDetailVisitor = JSON.parse(this.listUniversities[_index]['visitor'])
				}
			},
			renderChart() {
				let options = {
					chart: {
						height: '320px',
						type: 'area',
						toolbar: {
							show: false,
						},
						selection: {
							enabled: false,
						},
						zoom: {
							enabled: false,
						}
					},
					dataLabels: {
						enabled: true,
					},
					colors: ['#DFAB5F'],
					stroke: {
						curve: 'smooth',
						colors: ['#DFAB5F'],
					},
					markers: {
						colors: ['#DFAB5F'],
					},
					fill: {
						colors: ['#DFAB5F'],
					},
					xaxis: {
						type: 'category',
						categories: this.listDateRange,
						labels: {
							show: true,
						}
					},
					series: [{
						name: 'Pengunjung',
						data: this.listVisitor,
					}],
				}
				if (this.chart === null) {
					this.chart = new Chart(document.querySelector("#chart"), options);
					this.chart.render();
				}
			},
			fetchDateRangeFromDatabase() {
				this.axios.post(
					settingApi,
					{
						'request': 'query-data',
						'sql': `SELECT data FROM setting WHERE \`key\` = 'dateRange'`
					},
					{headers}
				).then(result => {
					this.listDateRange = []
					JSON.parse(result.data['data']).forEach(item => {
						this.listDateRange.push(item)
						this.listVisitor.push(0)
					})
					this.fetchDataFromDatabase()
				})
			},
			async fetchRealtimeCount() {
				setInterval(() => {
					this.axios.post(
						universitiesApi,
						{
							'request': 'query-list',
							'sql': 'SELECT id, universityName, visitor FROM university',
						},
						{headers},
					).then(async result => {
						let _realtimeListVisitor = new Array(this.listDateRange.length)
						for (let _a = 0; _a < this.listDateRange.length; _a++) {
							_realtimeListVisitor[_a] = 0
						}
						result.data.forEach(item => {
							for (let _a = 0; _a < this.listDateRange.length; _a++) {
								let _listVisitor = JSON.parse(item['visitor'])
								_realtimeListVisitor[_a] += parseInt(_listVisitor[_a])
							}
						})
						/* check list data changes */
						let _a = this.listVisitor.toString()
						let _b = _realtimeListVisitor.toString()
						if (_a !== _b) {
							for (let _a = 0; _a < this.listDateRange.length; _a++) {
								this.listVisitor[_a] = 0
							}
							this.listVisitor = _realtimeListVisitor
							this.chart.updateSeries([
								{
									name: 'Pengunjung',
									data: this.listVisitor,
								}
							])
						}
					})
				}, 1000)
			},
			fetchDataFromDatabase() {
				this.axios.post(
					universitiesApi,
					{
						'request': 'query-list',
						'sql': 'SELECT id, universityName, visitor FROM university',
					},
					{headers},
				).then(async result => {
					result.data.forEach(item => {
						let _data = item
						_data['totalVisitor'] = 0
						for (let _a = 0; _a < this.listDateRange.length; _a++) {
							let _listVisitor = JSON.parse(item['visitor'])
							this.listVisitor[_a] += parseInt(_listVisitor[_a])
							_data['totalVisitor'] += parseInt(_listVisitor[_a])
						}
						this.listUniversities.push(_data)
					})
					this.renderChart()
					this.fetchRealtimeCount()
				})
			},
			onClickButtonResetVisitor() {
				if (confirm('Apakah Anda yakin akan mereset data jumlah pengunjung?')) {
					let _a = []
					for (let _b = 0; _b < this.listDateRange.length; _b++) {
						_a.push(0)
					}
					let _c = JSON.stringify(_a)
					this.axios.post(
						universitiesApi,
						{
							'request': 'query',
							'sql': `UPDATE university SET visitor = '${_c}'`
						},
						{headers}
					).then(result => {
						if (result.data === 1)
							alert('Reset pengunjung berhasil!')
					})
				}
			},
			async onClickButtonRandomVisitor() {
				if (confirm('Acak jumlah pengunjung?')) {
					let _f = []
					for (let _c = 0; _c < this.listUniversities.length; _c++) {
						let _a = []
						for (let _b = 0; _b < this.listDateRange.length; _b++) {
							_a.push(Math.floor(Math.random() * 1000))
						}
						let _d = JSON.stringify(_a)
						let _e = this.listUniversities[_c]['id']
						this.axios.post(
							universitiesApi,
							{
								'request': 'query',
								'sql': `UPDATE university SET visitor = '${_d}' WHERE id = '${_e}'`,
							},
							{headers},
						).then(result => {
							_f.push(result.data)
							if (_f.length === this.listUniversities.length) {
								alert('Berhasil mengacak jumlah pengunjung!')
							}
						})
					}
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "../../utils/styles/globalStyle";

	.visitorScreenDashboard {
		padding: 2em 8%;
		box-sizing: border-box;
		overflow-y: auto;
		height: 100vh;
		.title { font-family: 'Montserrat', sans-serif; }
		#chart {
			margin-top: 2em;
		}
		.divUniversities {
			margin-top: 3.2em;
			.listUniversities {
				.listItemUniversities {
					margin-top: .32em;
					background-color: $colorCream;
					padding: 1em 1.16em;
					box-sizing: border-box;
					&:first-child {
						margin-top: 1em;
					}
					.divContent {
						display: flex;
						.universityName {
							user-select: none;
							flex: 1;
						}
						.totalVisitor:after {
							content: ' pengunjung';
						}
					}
					.divDetail {
						.divVisitor {
							margin-top: .32em;
							display: flex;
							.date {
								flex: 1;
							}
							.visitor:after {
								content: ' pengunjung';
							}
						}
					}
				}
			}
		}
		.divTool {
			display: flex;
			margin-top: 3.2em;
			p:last-child {
				margin-left: 1em;
			}
		}
	}
</style>
