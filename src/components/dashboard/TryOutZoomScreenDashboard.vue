<template>
	<div class="tryOutScreenDashboard">
		<!-- try out -->
		<p class="desktopSubtitle">Try out</p>
		<input v-model="tryOutSrcModel" style="margin-top: 2em;" class="desktopBody inputStyle" placeholder="poster src: 'https://pem.com/poster.png'">
		<textarea v-model="tryOutSrcStyleModel" style="height: 4em; margin-top: .32em;" class="desktopBody inputStyle" placeholder="srcStyle" />
		<input v-model="tryOutTitleModel" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="title">
		<input v-model="tryOutButtonTextModel" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="button text">
		<input v-model="tryOutButtonLinkModel" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="button link">
		<p @click="onClickUpdateTryOut" style="margin-top: 1em;" class="desktopFillButton">Update</p>

		<!-- zoom -->
		<!--<p style="margin-top: 3.2em;" class="desktopSubtitle">Zoom</p>
		<p class="desktopSubtitle" style="margin-top: 1em">Sabtu, 16 Januari 2021</p>
		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 1</p>
		<input v-model="zoomModel[0][0]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[0][1]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[0][2]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 2</p>
		<input v-model="zoomModel[0][3]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[0][4]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[0][5]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 3</p>
		<input v-model="zoomModel[0][6]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[0][7]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[0][8]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p class="desktopSubtitle" style="margin-top: 1em">Minggu, 17 Januari 2021</p>
		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 1</p>
		<input v-model="zoomModel[1][0]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[1][1]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[1][2]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 2</p>
		<input v-model="zoomModel[1][3]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[1][4]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[1][5]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p class="desktopBody" style="margin-top: 1em; margin-bottom: .32em">Sesi 3</p>
		<input v-model="zoomModel[1][6]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 1">
		<input v-model="zoomModel[1][7]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 2">
		<input v-model="zoomModel[1][8]" style="margin-top: .32em;" class="desktopBody inputStyle" placeholder="Zoom 3">

		<p style="margin-top: 1em;" @click="onClickUpdateZoom" class="desktopFillButton">Update</p>-->
	</div>
</template>

<script>
	import {queryApi} from "@/assets/js/apiUrl";
	import {headers} from "@/assets/js/apiUrl";

	export default {
		name: 'TryOutScreenDashboard',
		data() {
			return {
				tryOutSrcModel: '',
				tryOutSrcStyleModel: '',
				tryOutTitleModel: '',
				tryOutButtonTextModel: '',
				tryOutButtonLinkModel: '',
				zoomModel: [
					['', '', '', '', '', '', '', '', '',],
					['', '', '', '', '', '', '', '', '',],
				],
			}
		},
		created() {
			this.initializeTryOutData()
			this.initializeZoomData()
		},
		methods: {
			initializeTryOutData() {
				this.axios.post(
					queryApi,
					{
						'request': 'query-data',
						'sql': `SELECT value FROM mainPage WHERE \`key\` = 'tryOutData'`,
					},
					{headers}
				).then(result => {
					let _e = result.data['value']
					if (_e.length > 0) {
						let _tryOutData = JSON.parse(atob(_e))
						this.tryOutSrcModel = _tryOutData['src']
						this.tryOutSrcStyleModel = _tryOutData['srcStyle']
						this.tryOutTitleModel = _tryOutData['title']
						this.tryOutButtonTextModel = _tryOutData['buttonText']
						this.tryOutButtonLinkModel = _tryOutData['buttonLink']
					}
				})
			},
			initializeZoomData() {
				this.axios.post(
					queryApi,
					{
						'request': 'query-data',
						'sql': 'SELECT data FROM setting WHERE `key` = \'zoom\'',
					},
					{headers},
				).then(result => {
					let _data = result['data']
					this.zoomModel = JSON.parse(_data['data'])
				})
			},

			onClickUpdateTryOut() {
				let _mapData = {
					'src': this.tryOutSrcModel,
					'srcStyle': this.tryOutSrcStyleModel,
					'title': this.tryOutTitleModel,
					'buttonText': this.tryOutButtonTextModel,
					'buttonLink': this.tryOutButtonLinkModel,
				}
				let _e = btoa(JSON.stringify(_mapData))
				this.axios.post(
					queryApi,
					{
						'request': 'query',
						'sql': `UPDATE mainPage SET value = '${_e}' WHERE \`key\` = 'tryOutData'`,
					},
					{headers}
				).then(result => {
					if (result.data === 1) {
						alert('Update success!')
					}
				})
			},
			onClickUpdateZoom() {
				let _zoomData = JSON.stringify(this.zoomModel)
				this.axios.post(
					queryApi,
					{
						'request': 'query',
						'sql': `UPDATE setting SET data = '${_zoomData}' WHERE \`key\` = 'zoom'`,
					},
					{headers},
				).then(result => {
					if (result.data === 1) {
						alert('Update berhasil!')
					}
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.tryOutScreenDashboard {
		height: 100vh;
		overflow-y: auto;
		padding: 2em 8%;
		box-sizing: border-box;
		.inputStyle {
			padding: .64em 1.16em;
			width: 100%;
			resize: none;
			background-color: rgba(0, 0, 0, .04);
			border: none;
			outline: none;
		}
	}
</style>
