<template>
	<div class="parsePage">
		<button @click="parse">Parse</button>
		<br>
		<textarea style="resize: none; height: 56vh; width: 100%;" v-model="model"></textarea>
	</div>
</template>

<script>
	export default {
		name: 'ParsePage',
		data() {
			return {
				data: '',
				listJsonData: '',
				listJsonCategory: [],
				model: '',
			}
		},
		methods: {
			parse() {
				this.data = atob(prompt('encrypt'))
				this.listJsonData = JSON.parse(this.data)

				let _listCategory = []
				let _categoryIndex = 0
				let _categoryTitle = ''
				for (let _a = 0; _a < this.listJsonData.length; _a++) {
					let _jsonData = this.listJsonData[_a]
					if (_jsonData['type'] === 'scrollToId') {
						this.listJsonCategory.push({
							'id': _categoryIndex,
							'hide': _categoryIndex === 0 ? 'false' : 'true',
							'visibility': _categoryIndex === 0 ? '1' : '0',
							'title': _categoryTitle,
							'listData': _listCategory,
						})
						_categoryIndex++

						/* reset list category */
						_listCategory = []

						/* update category title */
						_categoryTitle = _jsonData['title']
					} else {
						_listCategory.push(_jsonData)
						if (_a === this.listJsonData.length - 1) {
							this.listJsonCategory.push({
								'id': _categoryIndex,
								'hide': 'false',
								'visibility': '1',
								'title': '',
								'listData': _listCategory,
							})
						}
					}
				}
				this.model = btoa(JSON.stringify(this.listJsonCategory))
			},
		}
	}
</script>

<style scoped lang="scss">
	.parsePage {

	}
</style>
