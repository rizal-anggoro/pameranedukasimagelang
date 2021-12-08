import {queryApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

export default {
	name: "RegistrationScreenApp",
	data() {
		return {
			imageUrl: 'https://pameranedukasimagelang.com/pameranedukasimagelang/assets/pamflet.png',

			nameModel: '',
			schoolModel: '',
			facultyModel: '',
			phoneModel: '',
			emailModel: '',
			isRegistering: false,
		}
	},
	created() {
		this.fetchAccountFromCookie()
	},
	methods: {
		fetchAccountFromCookie() {
			let _tag = 'jsonAccountData'
			if (localStorage.getItem(_tag) !== null) {
				this.$parent['fetchAccessStatus'] = 2
			}
		},
		onClickButtonDone() {
			let _name = this.nameModel
			let _school = this.schoolModel
			let _faculty = this.facultyModel
			let _phone = this.phoneModel
			let _email = this.emailModel
			if (_name.length > 0 > 0 && _phone.length > 0 && _email.length > 0) {
				this.isRegistering = true
				let _jsonData = {
					'name': _name,
					'school': _school,
					'faculty': _faculty,
					'phone': _phone,
					'email': _email,
				}

				let _sql = `INSERT INTO account (name, school, faculty, phone, email) VALUES 
				('${_name}', '${_school}', '${_faculty}', '${_phone}', '${_email}')`
				this.axios.post(
					queryApi,
					{
						'request': 'query',
						'sql': _sql,
					},
					{headers}
				).then(result => {
					this.isRegistering = false
					if (result.data === 1) {
						/* save to local storage */
						let _tag = 'jsonAccountData'
						localStorage.setItem(_tag, JSON.stringify(_jsonData))

						this.$parent.fetchAccessStatus = 2
					} else {
						alert(`error: ${result.status} ${result.statusText}`)
					}
				})
			}
		},
	}
}
