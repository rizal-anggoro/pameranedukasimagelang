import {universitiesApi} from "@/assets/js/apiUrl";
import {EventBus} from "@/utils/scripts/eventBusScript";

export default {
	name: 'AppBarDetail',
	data() {
		return {
			dataType: -1,
			universityId: '',
			jsonUniversityData: '',

			listMenu: [],
		}
	},
	created() {
		this.initializeRoute()
	},
	methods: {
		initializeRoute() {
			let route = this.$route
			let query = route.query
			this.universityId = query['id']

			this.fetchDataFromDatabase()
		},
		fetchDataFromDatabase() {
			this.axios.post(
				universitiesApi,
				{
					'request': 'query-data',
					'sql': `SELECT universityName, scrollTo, logoUrl, categoryData FROM university WHERE id = '${this.universityId}'`,
				},
				{
					headers: {
						'Content-Type': 'text/plain',
					}
				}
			).then((result) => {
				this.jsonUniversityData = result.data

				/* save scrollTo to session storage */
				if (this.jsonUniversityData['scrollTo'] !== null) {
					let _jsonScrollTo = atob(this.jsonUniversityData['scrollTo'])
					sessionStorage.setItem(`scrollTo-${this.universityId}`, _jsonScrollTo)
					this.dataType = 0
				} else {
					this.dataType = 1
				}
			})
		},
		onClickMenu() {
			EventBus.$emit('onClickMenu')
		},
	}
}
