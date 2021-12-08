<template>
	<div class="contentScreenDetail2">
		<!-- mobile -->
		<div class="mobile" v-responsive.sm.xs>
			<!-- list category -->
			<div class="listCategory" v-for="index in listJsonCategoryData.length" :key="index - 1">
				<!-- button show / hide -->
				<div v-if="listJsonCategoryData[index - 1]['hide'] === 'true'" @click="onClickToggle(index - 1)" class="divButtonToggle">
					<p class="desktopSubtitle">{{listJsonCategoryData[index - 1]['title']}}</p>
					<div class="divider"></div>
					<svg v-if="selectedIndex === (index - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up">
						<polyline points="18 15 12 9 6 15" />
					</svg>
					<svg v-if="selectedIndex !== (index - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
				<div v-if="listJsonCategoryData[index - 1]['hide'] === 'true' && index !== (listJsonCategoryData.length - 1) && selectedIndex !== (index - 1)" class="horizontalLine"></div>

				<!-- list element -->
				<vue-page-transition class="fade">
					<virtual-list
						v-if="selectedIndex === (index - 1) || listJsonCategoryData[index - 1]['hide'] === 'false'"
						:keeps="listJsonCategoryData[index - 1]['listData'].length"
						:data-component="listItemDataMobile"
						:data-sources="listJsonCategoryData[index - 1]['listData']"
						:data-key="'id'"
						:page-mode="true" />
				</vue-page-transition>
			</div>
		</div>

		<!-- desktop -->
		<div class="desktop" v-responsive.md.lg.xl>
			<!-- list category -->
			<div class="listCategory" v-for="index in listJsonCategoryData.length" :key="index - 1">
				<!-- button show / hide -->
				<div v-if="listJsonCategoryData[index - 1]['hide'] === 'true'" @click="onClickToggle(index - 1)" class="divButtonToggle">
					<p class="desktopSubtitle">{{listJsonCategoryData[index - 1]['title']}}</p>
					<div class="divider"></div>
					<svg v-if="selectedIndex === (index - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up">
						<polyline points="18 15 12 9 6 15" />
					</svg>
					<svg v-if="selectedIndex !== (index - 1)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
				<div v-if="listJsonCategoryData[index - 1]['hide'] === 'true' && index !== (listJsonCategoryData.length - 1) && selectedIndex !== (index - 1)" class="horizontalLine"></div>

				<!-- list element -->
				<vue-page-transition class="fade">
					<virtual-list
						v-if="selectedIndex === (index - 1) || listJsonCategoryData[index - 1]['hide'] === 'false'"
						:keeps="listJsonCategoryData[index - 1]['listData'].length"
						:data-component="listItemData"
						:data-sources="listJsonCategoryData[index - 1]['listData']"
						:data-key="'id'"
						:page-mode="true" />
				</vue-page-transition>
			</div>
		</div>
	</div>
</template>

<script>
	import ListItemData from '@/components/detail/ListItemDataDetail'
	import ListItemDataMobile from '@/components/detail/ListItemDataDetailMobile'

	import {universitiesApi} from "@/assets/js/apiUrl";
	import {headers} from "@/assets/js/apiUrl";

	export default {
		name: 'ContentScreenDetail2',
		data() {
			return {
				listItemData: ListItemData,
				listItemDataMobile: ListItemDataMobile,
				listJsonCategoryData: [],
				selectedIndex: -1,
				universityId: '',
				lastCategoryScrollY: -1,
			}
		},
		created() {
			this.initializeRoute()
		},
		methods: {
			initializeRoute() {
				let _query = this.$route.query
				this.universityId = _query['id']
				this.fetchCategoryDataFromDatabase()
			},
			fetchCategoryDataFromDatabase() {
				this.axios.post(
					universitiesApi,
					{
						'request': 'query-data',
						'sql': `SELECT categoryData FROM university WHERE id = '${this.universityId}'`
					},
					{headers}
				).then(result => {
					let _encrypt = result.data['categoryData']
					if (_encrypt.length > 0) {
						this.listJsonCategoryData = JSON.parse(atob(_encrypt))
					}
				})
			},
			onClickToggle(_index) {
				if (this.selectedIndex === _index) {
					/* hide */
					this.selectedIndex = -1
					this.lastCategoryScrollY = -1
				} else {
					/* show */
					if (this.lastCategoryScrollY === -1) {
						this.lastCategoryScrollY = window.scrollY
					} else {
						window.scrollTo({
							top: this.lastCategoryScrollY,
						})
					}
					this.selectedIndex = _index
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	@import "../../utils/styles/globalStyle";

	.contentScreenDetail2 {
		.mobile {
			padding-top: $mobileAppBarHeight;
			box-sizing: border-box;
			.listCategory {
				.divButtonToggle {
					display: flex;
					padding: 1em 8%;
					box-sizing: border-box;
					transition: background-color 250ms linear;
					&:hover {
						transition: background-color 250ms linear;
						background-color: rgba(0, 0, 0, .04);
					}
					svg {
						min-width: 24px;
						margin-right: 1em;
						stroke: $colorDarkGreen;
					}
					.desktopSubtitle {
						font-weight: 500;
						user-select: none;
					}
					.divider {
						flex: 1;
					}
				}
				.horizontalLine {
					outline: none;
					border: none;
					background-color: rgba(0, 0, 0, .08);
					width: 84%;
					height: 2.5px !important;
					margin: 0 8%;
				}
			}
		}
		.desktop {
			padding-top: $desktopAppBarHeight;
			box-sizing: border-box;
			.listCategory {
				.divButtonToggle {
					display: flex;
					padding: 1em 8%;
					box-sizing: border-box;
					transition: background-color 250ms linear;
					&:hover {
						transition: background-color 250ms linear;
						background-color: rgba(0, 0, 0, .04);
					}
					svg {
						margin-right: 1em;
						stroke: $colorDarkGreen;
					}
					.desktopSubtitle {
						font-weight: 500;
						user-select: none;
					}
					.divider {
						flex: 1;
					}
				}
				.horizontalLine {
					outline: none;
					border: none;
					background-color: rgba(0, 0, 0, .08);
					width: 84%;
					height: 2.5px !important;
					margin: 0 8%;
				}
			}
		}
	}
</style>
