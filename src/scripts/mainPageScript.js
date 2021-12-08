import AppBarMain from '../components/main/AppBarMain'
import MenuMobileMain from '../components/main/MenuMobileMain'
import WelcomeScreenMain from '../components/main/WelcomeScreenMain'
import WelcomeSpeechScreenMain from '../components/main/WelcomeSpeechScreenMain'
import AboutScreenMain from '../components/main/AboutScreenMain'
import UniversitiesScreenMain from '../components/main/UniversitiesScreenMain'
import ContactScreenMain from '../components/main/ContactScreenMain'
import FooterScreenMain from '../components/main/FooterScreenMain'
import SponsorScreenMain from "@/components/main/SponsorScreenMain";
import TryOutScreenMain from '@/components/main/TryOutScreenMain'
import ZoomScreenMain from "@/components/main/ZoomScreenMain";

import {EventBus} from "@/utils/scripts/eventBusScript";
import {
	onMenuItemClickMain,
	onCloseMenuMobile,
	onOpenMenuMobile,
	listMenuMain,
} from "@/utils/scripts/mainPageData";

export default {
	name: 'MainPage',
	components: {
		AppBarMain,
		MenuMobileMain,
		WelcomeScreenMain,
		WelcomeSpeechScreenMain,
		AboutScreenMain,
		UniversitiesScreenMain,
		ContactScreenMain,
		FooterScreenMain,
		SponsorScreenMain,
		TryOutScreenMain,
		ZoomScreenMain,
	},
	data() {
		return {
			isMenuMobileMainOpened: false,
		}
	},
	created() {
		EventBus.$on(onOpenMenuMobile, () => {
			if (!this.isMenuMobileMainOpened)
				this.isMenuMobileMainOpened = true
			this.disableWindowScroll()
		})
		EventBus.$on(onCloseMenuMobile, () => {
			if (this.isMenuMobileMainOpened)
				this.isMenuMobileMainOpened = false
			this.enableWindowScroll()
		})
		EventBus.$on(onMenuItemClickMain, (mapData) => {
			let _scroll = listMenuMain[mapData['key']]['scroll']
			if (_scroll.length > 0) {
				let id = _scroll + (mapData.mobile ? 'Mobile' : 'Desktop')
				let element = document.getElementById(id)
				if (element !== null) {
					element.scrollIntoView({
						behavior: 'smooth',
					})
				}
			}
		})
	},
	methods: {
		disableWindowScroll() {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop
			let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
			window.onscroll = function () {
				window.scrollTo({
					top: scrollTop,
					left: scrollLeft,
				})
			}
		},
		enableWindowScroll() {
			window.onscroll = function () {}
		}
	}
}
