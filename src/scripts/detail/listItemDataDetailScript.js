import {EventBus} from "@/utils/scripts/eventBusScript";

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
		this.initializeQuery()
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
		initializeQuery() {
			let _query = this.$route.query
			let _showId = _query['showId']
			this.showId = _showId === 'true'
		},
		onClickId(_id) {
			EventBus.$emit('onClickId', _id)
			if (event.ctrlKey) {
				EventBus.$emit('onClickIdDelete', _id)
			}
		}
	},
}
