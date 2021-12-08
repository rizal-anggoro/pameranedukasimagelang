export default {
	name: 'SponsorScreenMain',
	data() {
		return {
			listPowered: [],

			listSponsorSmall: [],
			listSponsorMedium: [],

			listMediaPartnerMedium: [],
			listMediaPartnerSmall: [],

			listNameSponsorSmall: [
				'arcon.jpg',
				'bose2.jpg',
				'intanPariwara.jpg',
				'mebel.jpg',
				'prestasi.png',
			],
			listNameSponsorMedium: [
				'neutron.png',
				'joedag.jpg',
				'pmi.jpg',
				'sumberTeknik.jpg',
				'sotoJayadi.jpg',
				'kinnara.png',
			],

			listNameMediaPartnerMedium: [
				'akmil.png',
				'radar.jpg',
			],
			listNameMediaPartnerSmall: [
				'ej.png',
				'eSby.png',
				'eSmg.png',
				'expPensi.png',
				'galeri.jpg',
				'identitas.jpg',
				'info.jpg',
				'infoMhs.jpg',
				'je.jpg',
				'jogja.png',
				'jpa.jpg',
				'js.jpg',
				'mglRaya.jpg',
				'mglStd.jpg',
				'mglZone.jpg',
				'purZone.jpg',
				'tmgHitz.jpg',
				'wnsbHitz.jpg',
			],
		}
	},
	created() {
		this.initializeSponsor()
		this.initializeMediaPartner()
		this.initializeImage()
	},
	methods: {
		initializeSponsor() {
			this.listNameSponsorSmall.forEach(name => {
				let _a = require(`@/assets/image/sponsor/${name}`)
				this.listSponsorSmall.push(_a)
			})
			this.listNameSponsorMedium.forEach(name => {
				let _a = require(`@/assets/image/sponsor/${name}`)
				this.listSponsorMedium.push(_a)
			})
		},
		initializeMediaPartner() {
			this.listNameMediaPartnerSmall.forEach(name => {
				let _a = require('@/assets/image/mediaPartner/' + name)
				this.listMediaPartnerSmall.push(_a)
			})
			this.listNameMediaPartnerMedium.forEach(name => {
				let _a = require('@/assets/image/mediaPartner/' + name)
				this.listMediaPartnerMedium.push(_a)
			})
		},
		initializeImage() {
			let _poweredCount = 3
			for (let _a = 0; _a < _poweredCount; _a++) {
				if (_a < _poweredCount) {
					let _b = require(`@/assets/image/powered/powered${_a + 1}.png`)
					this.listPowered.push(_b)
				}
			}
		},
	}
}
