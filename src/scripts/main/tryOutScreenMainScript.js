import {queryApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

export default {
	name: 'TryOutScreenMain',
	data: function() {
		return {
			src: '',
			srcStyle: '',
			title: '',
			buttonText: '',
			buttonLink: '',
		}
	},
	created() {
		this.initializeTryOutData()
	},
	methods: {
		initializeTryOutData() {
			let _tag = 'jsonTryOutData'
			if (sessionStorage.getItem(_tag) === null) {
				this.axios.post(
					queryApi,
					{
						'request': 'query-data',
						'sql': `SELECT value FROM mainPage WHERE \`key\` = 'tryOutData'`
					},
					{headers}
				).then(result => {
					let _value = result.data['value']
					if (_value.length > 0) {
						let _data = JSON.parse(atob(_value))

						sessionStorage.setItem(_tag, _value)

						this.src = _data['src']
						this.srcStyle = _data['srcStyle']
						this.title = _data['title']
						this.buttonText = _data['buttonText']
						this.buttonLink = _data['buttonLink']
					}
				})
			} else {
				let _data = JSON.parse(atob(sessionStorage.getItem(_tag)))

				this.src = _data['src']
				this.srcStyle = _data['srcStyle']
				this.title = _data['title']
				this.buttonText = _data['buttonText']
				this.buttonLink = _data['buttonLink']
			}
		}
	},
}
