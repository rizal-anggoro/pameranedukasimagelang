export default {
	name: 'ListItemDataDetail',
	props: {
		source: {
			type: Object,
			default() {
				return {

				}
			}
		}
	},
	data() {
		return {
			showId: false,
		}
	},
	mounted() {
	},
	methods: {
		getStyleJSON(_isMobile, _jsonKey) {
			let _jsonStyle = this.source[_jsonKey]
			if (_isMobile) {
				let _a = _jsonKey + 'Mobile'
				let _b = this.source[_a]
				if (_b !== undefined && _b.length > 0) {
					_jsonStyle = _b
				}
			}
			return _jsonStyle
		},
	},
}
