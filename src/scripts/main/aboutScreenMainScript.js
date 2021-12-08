import VueClamp from 'vue-clamp'

import {pemDescription} from "@/utils/scripts/welcomeScreenData";

export default {
	name: 'AboutScreenMain',
	components: {
		VueClamp,
	},
	data() {
		return {
			pemDescription: pemDescription,
			aboutBodyMaxLines: 5,
			buttonReadMore: 'Baca selengkapnya',
			isExpanded: false,
			saveScroll: 0,
		}
	},
	created() {
	},
	methods: {
		readMore() {
			if (this.isExpanded) {
				this.aboutBodyMaxLines = 5
				this.buttonReadMore = 'Baca selengkapnya'
				/* restore scroll */
				if (this.saveScroll > 0) {
					window.scrollTo({
						top: this.saveScroll,
						behavior: "smooth",
					})
				}
			} else {
				this.aboutBodyMaxLines = 0
				this.buttonReadMore = 'Sembunyikan'
				/* save scroll */
				this.saveScroll = window.scrollY
			}
			this.isExpanded = !this.isExpanded
		}
	}
}
