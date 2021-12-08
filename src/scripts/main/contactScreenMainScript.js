import {contactApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

export default {
	name: 'ContactScreenMain',
	data() {
		return {
			listWhatsApp: [],
			listInstagram: [],
		}
	},
	created() {
		this.fetchWhatsAppFromDatabase()
		this.fetchInstagramFromDatabase()
	},
	methods: {
		fetchWhatsAppFromDatabase() {
			let _tag = 'jsonListInstagram'
			if (sessionStorage.getItem(_tag) !== null) {
				/* load list instagram from session storage */
				let _json = sessionStorage.getItem(_tag)
				if (_json.length > 0)
					this.listInstagram = JSON.parse(_json)
			} else {
				/* load list instagram from database cloud */
				this.axios.post(
					contactApi,
					{
						request: 'get-instagram',
					},
					{headers},
				).then((result) => {
					this.listInstagram = result.data

					let _json = JSON.stringify(this.listInstagram)
					sessionStorage.setItem(_tag, _json)
				})
			}
		},
		fetchInstagramFromDatabase() {
			let _tag = 'jsonListWhatsApp'
			if (sessionStorage.getItem(_tag) !== null) {
				let _json = sessionStorage.getItem(_tag)
				if (_json.length > 0)
					this.listWhatsApp = JSON.parse(_json)
			} else {
				this.axios.post(
					contactApi,
					{
						request: 'get-whatsapp',
					},
					{headers},
				).then((result) => {
					this.listWhatsApp = result.data

					let _json = JSON.stringify(this.listWhatsApp)
					sessionStorage.setItem(_tag, _json)
				})
			}
		},
		onListWhatsAppClick(_whatsApp) {
			let _number = _whatsApp.number.replaceAll('+', '')
				.replaceAll(' ', '')
			let _url = 'https://api.whatsapp.com/send?phone=' + _number
			window.open(_url, '_blank')
		},
		onListInstagramClick(_instagram) {
			let _name=  _instagram.name
			let _url = 'https://www.instagram.com/' + _name
			window.open(_url, '_blank')
		}
	}
}
