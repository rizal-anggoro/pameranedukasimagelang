<template>
	<div class="checkPage">
		<!-- mobile -->
		<div class="mobile" v-responsive.sm.xs>
			tidak mendukung versi mobile
		</div>

		<!-- desktop -->
		<div class="desktop" v-responsive.md.lg.xl>
			<p @click="check" class="desktopFillButton">Check</p>
			<p class="desktopBody" v-html="`Status<br>id: ${checkIndex}<br>select: ${listSelect[selectIndex]}`"></p>
			<p class="desktopBody" v-html="checkLog"></p>
		</div>
	</div>
</template>

<script>
	import {queryApi} from "@/assets/js/apiUrl";
	import {headers} from "@/assets/js/apiUrl";

	export default {
		name: 'CheckPage',
		data() {
			return {
				checkIndex: 1,
				selectIndex: 0,
				listSelect: [
					'id, universityName',
					'id, universityDescription',
					'id, popular',
					'id, visitor',
					'id, `like`',
					'id, data',
					'id, categoryData',
					'id, logoUrl',
					'id, scrollTo',
				],
				checkLog: '',
			}
		},
		methods: {
			check() {
				this.axios.post(
					queryApi,
					{
						'request': 'query-data',
						'sql' : `SELECT ${this.listSelect[this.selectIndex]} FROM university WHERE id = '${this.checkIndex}'`
					},
					{headers}
				).then(result => {
					if (result.data === '') {
						this.checkLog += `error: id = ${this.checkIndex}, column = ${this.listSelect[this.selectIndex].replace('id, ', '')}<br>`
					} else {
						if (this.checkIndex < 80) {
							this.checkIndex++
							this.check()
						} else {
							if (this.selectIndex < this.listSelect.length - 1) {
								this.checkIndex = 1
								this.selectIndex++
								this.check()
							}
						}
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>
