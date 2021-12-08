import {EventBus} from '@/utils/scripts/eventBusScript'
import {onButtonSearchClick} from "@/utils/scripts/universitiesPageData";
import {onInputEditTextSearch} from "@/utils/scripts/universitiesPageData";

export default {
	name: 'AppBarUniversities',
	data() {
		return {
			searchModel: '',
			isMobile: false,
		}
	},
	methods: {
		onKeyDownEditTextSearch(event) {
			if (event.keyCode === 13) {
				this.onButtonSearchClick()
			}
		},
		onButtonSearchClick() {
			EventBus.$emit(onButtonSearchClick, {
				data: this.searchModel,
				mobile: this.isMobile,
			})
		},
		emitInputEditTextSearch() {
			EventBus.$emit(onInputEditTextSearch, {
				data: this.searchModel,
			})
		},
	}
}
