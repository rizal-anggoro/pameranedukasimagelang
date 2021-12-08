import ListItemDataDetail from "@/components/detail/ListItemDataDetail";
import {EventBus} from "@/utils/scripts/eventBusScript";

export default {
	name: 'BuilderPage',
	data() {
		return {

			/* list item */
			listItemDataDetail: ListItemDataDetail,

			listItemDataType: [
				'footerFacebook',
				'footerTwitter',
				'footerYoutube',
				'footerPhone',
				'footerInstagram',
				'footerCopyright',
				'footerWebsite',
				'footerEmail',
				'footerWhatsApp',
				'footerTitle',
				'scrollToId',
				'customHtml',
				'listItemWithIndex',
				'imageWithTitleAndBody',
				'bigImage',
				'logoContent',
				'horizontalLine',
				'textBackground',
				'heading',
				'title',
				'subtitle',
				'body',
				'oneImage',
				'threeImages',
				'spacer',
			],
			listItemDataTypeValue: [
				['title', 'link'],
				['title', 'link'],
				['title', 'link'],
				[
					'number',
				],
				[
					'name',
					'link',
				],
				[],
				[
					'title',
					'link',
				],
				[
					'email',
				],
				[
					'name',
					'number',
					'link',
				],
				[
					'textBackground',
					'title',
				],
				[
					'scrollId',
					'title',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'html',
					'htmlMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'index',
					'indexStyle',
					'indexStyleMobile',
					'body',
					'bodyStyle',
					'bodyStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'src',
					'srcStyle',
					'srcStyleMobile',
					'title',
					'titleStyle',
					'titleStyleMobile',
					'subtitle',
					'subtitleStyle',
					'subtitleStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'src',
					'bigImageStyle',
					'bigImageStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'logoSrc',
					'logoStyle',
					'logoStyleMobile',
					'universityName',
					'universityNameStyle',
					'universityNameStyleMobile',
					'universityLocation',
					'universityLocationStyle',
					'universityLocationStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'horizontalLineStyle',
					'horizontalLineStyleMobile',
				],
				[
					'textBackground',
					'textBackgroundStyle',
					'textBackgroundStyleMobile',
					'title',
					'titleStyle',
					'titleStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'heading',
					'headingStyle',
					'headingStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'title',
					'titleStyle',
					'titleStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'subtitle',
					'subtitleStyle',
					'subtitleStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'body',
					'bodyStyle',
					'bodyStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'src',
					'oneImageStyle',
					'oneImageStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'src',
					'threeImageStyle',
					'threeImageStyleMobile',
					'parentStyle',
					'parentStyleMobile',
				],
				[
					'spacerStyle',
					'spacerStyleMobile',
				],
			],

			typeModel: '',
			addBeforeIdModel: '',
			deleteIdModel: '',
			getIdModel: '',
			updateIdModel: '',

			typeValue: [],

			typeValueModel0: '',
			typeValueModel1: '',
			typeValueModel2: '',
			typeValueModel3: '',
			typeValueModel4: '',
			typeValueModel5: '',
			typeValueModel6: '',
			typeValueModel7: '',
			typeValueModel8: '',
			typeValueModel9: '',
			typeValueModel10: '',

			autoSaveModel: false,
			autoResetModel: false,

			jsonUniversityData: [],
			listJsonCategory: [],
			jsonUniversityDataKey: [],

			generated: '[]',
			generatedScrollTo: '[]',
			id: 0,
			savedKeyJSON: [],
			loadedKey: '',
		}
	},
	created() {
		EventBus.$on('onClickId', (_id) => {
			this.getIdModel = _id.toString()
			this.updateIdModel = _id.toString()
			this.deleteIdModel = _id.toString()
			this.onClickGet()
		})
		EventBus.$on('onClickIdDelete', (_id) => {
			this.getIdModel = _id.toString()
			this.updateIdModel = _id.toString()
			this.deleteIdModel = _id.toString()
			this.onClickDelete()
		})
		this.loadSavedJSON()
	},
	computed: {

	},
	methods: {
		onChangeType() {
			let _index = this.listItemDataType
				.indexOf(this.typeModel)
			let _typeValue = this.listItemDataTypeValue[_index]
			if (_typeValue.length > 0) {
				this.typeValue = _typeValue/*.split(';')*/
			}
		},
		generateCode() {
			let _j = JSON.stringify(this.jsonUniversityData)
			this.generated = window.btoa(unescape(encodeURIComponent(_j)))
			if (this.autoSaveModel) {
				if (this.loadedKey.length > 0) {
					/* auto save work */
					localStorage.setItem(this.loadedKey, this.generated)
				}
			}
		},
		async generateCategoryData() {
			this.listJsonCategory = []
			let _listCategory = []
			let _categoryIndex = 0
			let _categoryTitle = ''
			for (let _a = 0; _a < this.jsonUniversityData.length; _a++) {
				let _jsonData = this.jsonUniversityData[_a]
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
					if (_a === this.jsonUniversityData.length - 1) {
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
			this.generatedScrollTo = btoa(JSON.stringify(this.listJsonCategory))
		},
		async generateScrollTo() {
			let _listScrollToId = []
			this.jsonUniversityData.forEach(item => {
				if (item['type'] === 'scrollToId') {
					let _scrollToId = {
						'scrollId': item['scrollId'],
						'title': item['title'],
					}
					_listScrollToId.push(_scrollToId)
				}
			})
			let _j = JSON.stringify(_listScrollToId)
			this.generatedScrollTo = window.btoa(unescape(encodeURIComponent(_j)))
		},
		onClickImport() {
			let _data = prompt('JSON data')
			if (_data.length > 0) {
				let _json = JSON.parse(_data)
				_json.forEach((item) => {
					let _id = item['id']
					if (_id > this.id)
						this.id = (parseInt(_id) + 1)
					this.jsonUniversityData.push(item)
					this.jsonUniversityDataKey.push(_id.toString())
				})
			}
			this.generateCode()
		},
		onClickImportEncrypt() {
			let _data = prompt('encrypt data')
			if (_data.length > 0) {
				let _json = JSON.parse(atob(_data))
				_json.forEach((item) => {
					let _id = item['id']
					if (_id > this.id)
						this.id = (parseInt(_id) + 1)
					this.jsonUniversityData.push(item)
					this.jsonUniversityDataKey.push(_id.toString())
				})
			}
			this.generateCode()
		},
		onClickClear() {
			this.jsonUniversityData.splice(0, this.jsonUniversityData.length)
			this.jsonUniversityDataKey.splice(0, this.jsonUniversityDataKey.length)
			this.generateCode()
		},
		onClickAdd() {
			if (this.typeModel.length > 0) {
				let _mapData = {}
				_mapData['id'] = this.id
				_mapData['type'] = this.typeModel

				/* insert type value to map data */
				let _typeValueModel = [
					this.typeValueModel0,
					this.typeValueModel1,
					this.typeValueModel2,
					this.typeValueModel3,
					this.typeValueModel4,
					this.typeValueModel5,
					this.typeValueModel6,
					this.typeValueModel7,
					this.typeValueModel8,
					this.typeValueModel9,
					this.typeValueModel10,
				]
				for (let _a = 0; _a < this.typeValue.length; _a++) {
					let _value = _typeValueModel[_a]
					/*_value = _value === undefined ? '' : _value*/
					if (_value !== undefined && _value.length > 0) {
						_mapData[this.typeValue[_a]] = `${_value}`
					}
				}

				/* insert map data to list */
				let _a = this.jsonUniversityData
				let _b = this.jsonUniversityDataKey

				if (this.addBeforeIdModel !== undefined && this.addBeforeIdModel.length > 0) {
					let _index = _b.indexOf(this.addBeforeIdModel.toString())
					if (_index !== -1) {
						_a.splice(_index, 0, _mapData)
						_b.splice(_index, 0, this.id.toString())
						this.addBeforeIdModel = ''
					}
				} else {
					_a.push(_mapData)
					_b.push(this.id.toString())
				}
				this.id++

				/* reset model value */
				if (this.autoResetModel)
					this.resetModel()

				/* generate code */
				this.generateCode()
			} else {
				alert('error: type undefined')
			}
		},
		onClickDelete() {
			if (this.deleteIdModel.length > 0) {
				let _a = this.jsonUniversityData
				let _b = this.jsonUniversityDataKey
				let _index = _b.indexOf(this.deleteIdModel.toString())
				if (_index !== -1) {
					_a.splice(_index, 1)
					_b.splice(_index, 1)

					if (this.autoResetModel)
						this.resetModel()

					this.generateCode()
				} else {
					alert('id not found!')
				}
			} else {
				alert('id: empty')
			}
		},
		onClickGet() {
			let _id = this.getIdModel.toString()
			if (_id.length > 0) {
				if (this.jsonUniversityData.length > 0) {
					let _index = this.jsonUniversityDataKey.indexOf(_id)
					if (_index !== -1) {
						let _jsonData = this.jsonUniversityData[_index]
						let _type = _jsonData['type']
						let _index1 = this.listItemDataType.indexOf(_type)
						if (_index1 !== -1) {
							this.typeValue = this.listItemDataTypeValue[_index1]
							this.typeModel = _type
							let _d = []
							for (let _a = 0; _a < this.typeValue.length; _a++) {
								let _b = this.typeValue[_a]
								let _c = _jsonData[_b]
								_d.push(_c)
							}
							this.changeTypeValueModel(_d)
						} else {
							alert('error: wrong index type!')
						}
					} else {
						alert('error: id not found!')
					}
				} else {
					alert('error: JSON data size = 0')
				}
			} else {
				alert('error: from id? empty')
			}
		},
		onClickUpdate() {
			let _id = this.updateIdModel.toString()
			if (_id.length > 0) {
				if (this.jsonUniversityData.length > 0) {
					let _index = this.jsonUniversityDataKey.indexOf(_id)
					if (_index !== -1) {
						let _mapData = {}
						_mapData['id'] = _id
						_mapData['type'] = this.typeModel

						let _typeValueModel = [
							this.typeValueModel0,
							this.typeValueModel1,
							this.typeValueModel2,
							this.typeValueModel3,
							this.typeValueModel4,
							this.typeValueModel5,
							this.typeValueModel6,
							this.typeValueModel7,
							this.typeValueModel8,
							this.typeValueModel9,
							this.typeValueModel10,
						]
						for (let _a = 0; _a < this.typeValue.length; _a++) {
							let _value = _typeValueModel[_a]
							if (_value !== undefined && _value.length > 0)
								_mapData[this.typeValue[_a]] = `${_value}`
						}

						/* insert map data to list */
						let _a = this.jsonUniversityData
						let _b = this.jsonUniversityDataKey

						/* delete current position */
						_a.splice(_index, 1)
						_b.splice(_index, 1)

						/* add new map data to current position */
						_a.splice(_index, 0, _mapData)
						_b.splice(_index, 0, _id.toString())

						/* reset model value */
						if (this.autoResetModel)
							this.resetModel()

						/* generate code */
						this.generateCode()
					} else {
						alert('error: id not found!')
					}
				} else {
					alert('error: JSON data size = 0')
				}
			} else {
				alert('error: to id? empty')
			}
		},
		onClickSave() {
			let _name = prompt('university name', this.loadedKey)
			if (_name.length > 0) {
				let _keyJSON = localStorage.getItem('keyJSON')
				let _keys = []
				if (_keyJSON !== null) {
					JSON.parse(_keyJSON).forEach((_key) => {
						_keys.push(_key)
					})
					if (_keys.indexOf(_name) === -1) {
						_keys.push(_name)
						localStorage.setItem('keyJSON', JSON.stringify(_keys))

						this.generateCode()
						localStorage.setItem(_name, this.generated)
						alert(`saved: ${_name}`)
					} else {
						let _a = confirm(`data with the name '${_name}' already exists. overwrite existing data?`)
						if (_a) {
							this.generateCode()
							localStorage.setItem(_name, this.generated)
							alert(`saved: ${_name}`)
						}
					}
				} else {
					/* null */
					_keys.push(_name)
					localStorage.setItem('keyJSON', JSON.stringify(_keys))

					this.generateCode()
					localStorage.setItem(_name, this.generated)
					alert(`saved: ${_name}`)
				}
				this.loadSavedJSON()
			}
		},
		loadSavedJSON() {
			let _keyJSON = localStorage.getItem('keyJSON')
			if (_keyJSON !== null) {
				if (this.savedKeyJSON.length > 0)
					this.savedKeyJSON.splice(0, this.savedKeyJSON.length)
				JSON.parse(_keyJSON).forEach((_key) => {
					this.savedKeyJSON.push(_key)
				})
			}
		},
		onClickSavedKey(_key) {
			if (confirm(`load '${_key}'?`)) {
				this.onClickClear()
				this.loadedKey = _key
				let _data = atob(localStorage.getItem(_key))
				if (_data.length > 0) {
					let _json = JSON.parse(_data)
					_json.forEach((item) => {
						let _id = item['id']
						if (_id > this.id)
							this.id = (parseInt(_id) + 1)
						this.jsonUniversityData.push(item)
						this.jsonUniversityDataKey.push(_id.toString())
					})
				}
				this.generateCode()
			}
		},
		changeTypeValueModel(_values) {
			this.typeValueModel0 = _values[0]
			this.typeValueModel1 = _values[1]
			this.typeValueModel2 = _values[2]
			this.typeValueModel3 = _values[3]
			this.typeValueModel4 = _values[4]
			this.typeValueModel5 = _values[5]
			this.typeValueModel6 = _values[6]
			this.typeValueModel7 = _values[7]
			this.typeValueModel8 = _values[8]
			this.typeValueModel9 = _values[9]
			this.typeValueModel10 = _values[10]
		},
		resetModel() {
			this.changeTypeValueModel([
				'', '', '', '', '', '', '', '', '', '', '',
			])
			this.typeModel = ''
			this.addBeforeIdModel = ''
			this.deleteIdModel = ''
			this.getIdModel = ''
			this.updateIdModel = ''
		},
		onKeyDown(_event) {
			switch (_event.keyCode) {
				case 19 :
					/* add */
					this.onClickAdd()
					break

				case 36 :
					/* update */
					this.onClickUpdate()
					break
			}
		},
	}
}
