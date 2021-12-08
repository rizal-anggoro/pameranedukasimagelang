import {EventBus} from "@/utils/scripts/eventBusScript";
import {
	listMenuMain,
	onCloseMenuMobile,
	onMenuItemClickMain,
}
from "@/utils/scripts/mainPageData";

export default {
	name: 'MenuMobileMain',
	data() {
		return {
			listMenuMain: listMenuMain,
			windowScrollY: 0,
		}
	},
	methods: {
		closeMenuMobileMain() {
			EventBus.$emit(onCloseMenuMobile)
		},
		onMenuMobileMainClick(key) {
			window.onscroll = function () {}
			let mapData = {
				key: key,
				mobile: true,
			}
			EventBus.$emit(onMenuItemClickMain, mapData)
			this.closeMenuMobileMain()
		}
	},
}
