<template>
	<div class="builderPreviewPage">
		<div class="mobile" v-responsive.sm.xs>
			<virtual-list
				:keeps="jsonUniversityData.length"
				:data-component="listItemDataDetailMobile"
				:data-sources="jsonUniversityData"
				:data-key="'id'"
				:page-mode="true" />
		</div>

		<div class="desktop" v-responsive.md.lg.xl>
			<virtual-list
				:keeps="jsonUniversityData.length"
				:data-component="listItemDataDetail"
				:data-sources="jsonUniversityData"
				:data-key="'id'"
				:page-mode="true" />
		</div>
	</div>
</template>

<script>
	import ListItemDataDetail from "@/components/detail/ListItemDataDetail";
	import ListItemDataDetailMobile from "@/components/detail/ListItemDataDetailMobile"

	export default {
		name: 'BuilderPreviewPage',
		data() {
			return {
				/* list item */
				listItemDataDetail: ListItemDataDetail,
				listItemDataDetailMobile: ListItemDataDetailMobile,

				jsonData: '',
				jsonUniversityData: [],
			}
		},
		created() {
			this.jsonData = window.atob(prompt('encrypt data'))
			this.initializeJson()
		},
		methods: {
			initializeJson() {
				if (this.jsonData.length > 0) {
					let _json = JSON.parse(this.jsonData)
					_json.forEach((item) => {
						this.jsonUniversityData.push(item)
					})
				}
			}
		}
	}
</script>

<style scoped>

</style>
