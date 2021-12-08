import {EventBus} from "@/utils/scripts/eventBusScript";
import {onMenuItemClickMain} from "@/utils/scripts/mainPageData";
import {pemDescription} from "@/utils/scripts/welcomeScreenData";

import Vue from 'vue'
import AppResponsive from 'vue-responsive'

Vue.use(AppResponsive)
Vue.directive('responsive', AppResponsive)

export default {
	name: 'WelcomeScreenMain',
	data() {
		return {
			pemDescription: pemDescription,
			mobileIsOverflowed: false,
			windowHeight: 0,
		}
	},
	created() {
		this.windowHeight = window.innerHeight
	},
	mounted() {
		this.mobileInitializeResponsive()
	},
	methods: {
		mobileInitializeResponsive() {
			let mobileDivImageHeight = document.getElementById('mobileDivImage').getBoundingClientRect().height
			let mobileDivContentHeight = document.getElementById('mobileDivContent').getBoundingClientRect().height
			let requiredHeight = mobileDivImageHeight + mobileDivContentHeight + 72 /* app bar height */;
			this.mobileIsOverflowed = requiredHeight > this.windowHeight
		},
		onExploreClick(isMobile) {
			let mapData = {
				key: 0,
				mobile: isMobile,
			}
			EventBus.$emit(onMenuItemClickMain, mapData)
		}
	},
}
