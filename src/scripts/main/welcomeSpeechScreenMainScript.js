import VueVideoPlayer from 'vue-video-player';
import jsonWelcomeSpeech from '../../assets/json/welcomeSpeech.json'

import VueClamp from 'vue-clamp'

import {welcomeSpeech} from "@/utils/scripts/welcomeSpeech";

export default {
	name: 'WelcomeSpeechScreenMain',
	components: {
		VueVideoPlayer,
		VueClamp,
	},
	data() {
		return {
			urlVideo: 'https://pameranedukasimagelang.com/pameranedukasimagelang/assets/sambutan-kepala-sekolah.mp4',
			welcomeSpeech: welcomeSpeech,
			listWelcomeSpeech: [],
			isExpanded: false,
			saveScrollY: 0,
		}
	},
	created() {
		this.initializeListWelcomeSpeech()
	},
	methods: {
		initializeListWelcomeSpeech() {
			jsonWelcomeSpeech.welcomeSpeech.forEach(item => {
				this.listWelcomeSpeech.push({
					imagePosition: item.imagePosition,
					imageMobile: require('../../assets/image/welcomeSpeech/' + item['imageMobile']),
					imageDesktop: require('../../assets/image/welcomeSpeech/' + item['imageDesktop']),
					title: item.title,
					subtitle: item.subtitle,
					body: item.body,
				})
			})
		},
		onClickButtonReadMore() {
			if (this.isExpanded) {
				this.isExpanded = false
				if (this.saveScrollY > 0) {
					window.scrollTo({
						top: this.saveScrollY,
						behavior: 'smooth',
					})
				}
			} else {
				this.isExpanded = true
				/* save scroll */
				this.saveScrollY = window.scrollY
			}
		},
	}
}
