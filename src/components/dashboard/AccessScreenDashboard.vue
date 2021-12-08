<template>
	<div class="accessScreen">
		<p class="desktopSubtitle">Akses</p>
		<div class="divWebAccess">
			<p class="desktopBody title">Status web saat ini</p>
			<div @click="onClickAccess(index - 1)" class="accesses" :key="index - 1" v-for="index in accesses.length">
				<div class="divIcon">
					<svg :class="{'selected': (index - 1) === selectedAccess, 'unselected': (index - 1) !== selectedAccess}" width="1.16em" height="1.16em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
					</svg>
				</div>
				<div class="divText">
					<p class="desktopBody">{{accesses[index - 1]}}</p>
				</div>
			</div>
		</div>
		<div class="divAccessCode">
			<p class="desktopBody title">Kode akses</p>
			<div class="divEditText">
				<input class="desktopBody" type="text" v-model="codeAccessModel">
				<p @click="onClickUpdateCodeAccess" class="desktopFillButton">Perbarui</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {settingApi} from "@/assets/js/apiUrl";

	export default {
		name: "AccessScreenDashboard",
		data() {
			return {
				accesses: [
					'Private',
					'Public',
				],
				selectedAccess: -1,
				codeAccessModel: '',
			}
		},
		beforeMount() {
			this.fetchAccessFromDatabase()
			this.fetchAccessCodeFromDatabase()
		},
		methods: {
			onClickAccess(_index) {
				if (this.selectedAccess !== _index) {
					this.axios.post(
						settingApi,
						{
							'request': 'update-access',
							'access': _index === 0 ? 'private' : 'public',
						},
						{
							headers: {
								'Content-Type': 'text/plain',
							},
						},
					).then(result => {
						if (result.data === 1) {
							this.selectedAccess = _index
							alert(`Akses web berhasil diubah ke ${_index === 0 ? 'private' : 'public'}!`)
						}
					})
				}
			},
			fetchAccessFromDatabase() {
				this.axios.post(
					settingApi,
					{
						'request': 'get-access',
					},
					{
						headers: {
							'Content-Type': 'text/plain',
						}
					},
				).then(result => {
					let _access = result.data['data']
					this.selectedAccess = _access === 'private' ? 0 : 1
				})
			},
			fetchAccessCodeFromDatabase() {
				this.axios.post(
					settingApi,
					{
						'request': 'get-access-code',
					},
					{
						headers: {
							'Content-Type': 'text/plain',
						}
					},
				).then(result => {
					this.codeAccessModel = `${result.data}`
				})
			},
			onClickUpdateCodeAccess() {
				this.axios.post(
					settingApi,
					{
						'request': 'update-access-code',
						'accessCode': this.codeAccessModel,
					},
					{
						headers: {
							'Content-Type': 'text/plain',
						}
					},
				).then(result => {
					if (result.data === 1) {
						alert('Ubah kode akses berhasil!')
					}
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "../../utils/styles/globalStyle";

	.accessScreen {
		padding: 2em 8%;
		box-sizing: border-box;
		.title {
			font-size: 1.32em;
			color: rgba(0, 0, 0, .8);
			font-weight: 500;
		}
		.desktopSubtitle {
			font-family: 'Montserrat', sans-serif;
		}
		.divWebAccess {
			margin-top: 2em;
			.accesses {
				margin-top: .32em;
				display: flex;
				.divIcon {
					svg {
						position: relative;
						top: 50%;
						transform: translateY(-50%);
					}
					.selected {
						fill: $colorAmber;
						stroke: $colorDarkAmber;
					}
					.unselected {
						fill: transparent;
						stroke: $colorDarkAmber;
					}
				}
				.divText {
					p {
						margin-left: 1em;
						user-select: none;
					}
				}
			}
		}
		.divAccessCode {
			margin-top: 2em;
			.divEditText {
				display: flex;
				margin-top: .64em;
				input {
					margin-right: 1em;
					flex: 1;
					padding: .64em 1.16em;
					box-sizing: border-box;
					border: none;
					outline: none;
					stroke: none;
					background-color: rgba(0, 0, 0, .04);
				}
			}
		}
	}
</style>
