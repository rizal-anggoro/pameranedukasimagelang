import {universitiesApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

import ListItemDataDetail from "@/components/detail/ListItemDataDetail";
import ListItemDataDetailMobile from '@/components/detail/ListItemDataDetailMobile'

export default {
	name: 'ContentScreenDetail',
	data() {
		return {
			listItemDataDetail: ListItemDataDetail,
			listItemDataDetailMobile: ListItemDataDetailMobile,

			jsonUniversityData: [],
		}
	},
	beforeMount() {
		this.initializeRoute()
	},
	methods: {
		initializeRoute() {
			let _query = this.$route.query
			this.universityId = _query.id;
			this.fetchUniversityFromDatabase()
		},
		fetchUniversityFromDatabase() {
			this.axios.post(
				universitiesApi,
				{
					'request': 'query-data',
					'sql': `SELECT data FROM university WHERE id = '${this.universityId}'`,
				},
				{headers},
			).then((result) => {
				let _data = result.data['data']
				if (_data !== null) {
					let _decryptData = atob(_data)
					this.jsonUniversityData = JSON.parse(_decryptData)
				} else {
					console.log('null')
				}
			})
		},
	},
}
