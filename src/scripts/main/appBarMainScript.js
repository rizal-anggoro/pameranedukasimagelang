import {EventBus} from "@/utils/scripts/eventBusScript";
import {
	onMenuItemClickMain,
	onOpenMenuMobile,
	listMenuMain,
} from '@/utils/scripts/mainPageData'

export default {
	name: 'AppBarMain',
	data() {
		return {
			listMenuMain: listMenuMain,
			windowScrollY: 0,
		}
	},
	created() {
		window.addEventListener('scroll', this.onScrollEvent)
	},
	destroyed() {
		window.removeEventListener('scroll', this.onScrollEvent)
	},
	computed: {
		isScrolled() {
			return this.windowScrollY > 0
		}
	},
	methods: {
		openMenuMobileMain() {
			EventBus.$emit(onOpenMenuMobile)
		},
		onScrollEvent() {
			this.windowScrollY = window.scrollY
		},
		onMenuItemClick(key) {
			let mapData = {
				key: key,
				mobile: false,
			}
			EventBus.$emit(onMenuItemClickMain, mapData)
		}
	}
}
