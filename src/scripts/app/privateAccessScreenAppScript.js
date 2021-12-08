import {settingApi} from "@/assets/js/apiUrl";

export default {
	name: 'PrivateAccessScreenApp',
	methods: {
		onClickButtonHaveCode() {
			let _codeAccess = prompt('kode akses', '')
			this.axios.post(
				settingApi,
				{
					'request': 'check-code-access',
					'codeAccess': _codeAccess,
				}, {
					headers: {
						'Content-Type': 'text/plain',
					},
				}
			).then((result) => {
				let _status = result.data
				if (_status === 1) {
					this.$parent.fetchAccessStatus = 1
				}
			})
		}
	},
}
