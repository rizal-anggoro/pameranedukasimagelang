<template>
	<div>
		<!--<div v-for="index in listData.length" :key="index - 1">
			<button v-if="listData[index - 1]['hide'] === 'true'" @click="onClickHide(index - 1)">{{listData[index - 1]['title']}}</button>
			<virtual-list
				v-if="currentIndex === (index - 1) || listData[index - 1]['hide'] === 'false'"
				:keeps="listData[index - 1]['listData'].length"
				:data-component="listItemData"
				:data-sources="listData[index - 1]['listData']"
				:data-key="'id'"
				:page-mode="true" />
		</div>-->
		<div class="testDiv">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus praesentium, quas?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus praesentium, quas?</p>
		</div>
	</div>
</template>
<script>
	import ListItemData from '@/components/detail/ListItemDataDetail'
	import {listDataUniversity} from "@/utils/scripts/testScript";

	export default {
		name: 'TestPage',
		data() {
			return {
				testKey: 0,
				render: true,
				listItemData: ListItemData,
				listData: listDataUniversity,
				currentIndex: 0,
			}
		},
		methods: {
			/*async onClickHide(_index) {
				/!*this.render = false*!/
				if (this.currentIndex === _index) {
					this.currentIndex = -1
				} else {
					this.currentIndex = _index
				}
				/!*await this.$nextTick()
				this.render = true*!/
			},*/
		}
	}
</script>
<style lang="scss">
	.testDiv {
		display: flex;
		flex-direction: row;
		p {
			background-color: red;
			width: 50%;
		}
		@media (max-width: 767px) {
			flex-direction: column;
		}
	}
</style>
