import VueClamp from 'vue-clamp'
import {universitiesApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

export default {
	name: 'UniversitiesScreenMain',
	components: {
		VueClamp,
	},
	data() {
		return {
			listPopularUniversities: [],
			listUniversitiesScrollLeft: 0,
			listUniversitiesMinScroll: 0,
			listUniversitiesMaxScroll: 0,
			isListUniversitiesMinScroll: true,
			isListUniversitiesMaxScroll: true,
		}
	},
	created() {
		this.fetchPopularUniversitiesFromDatabase()
	},
	updated() {
		this.initializeOnScrollListUniversities()
	},
	computed: {
	},
	methods: {
		viewMore() {
			this.$router.push({
				path: 'universities',
			}).then()
		},
		fetchPopularUniversitiesFromDatabase() {
			let _tag = 'jsonListPopularUniversities'
			if (sessionStorage.getItem(_tag) !== null) {
				/* load json list popular universities from session storage */
				let _json = sessionStorage.getItem(_tag)
				if (_json.length > 0)
					this.listPopularUniversities = JSON.parse(_json)
			} else {
				/* load list popular universities from database cloud */
				this.axios.post(
					universitiesApi,
					{
						'request': 'query-list',
						'sql': `SELECT id, universityName, universityDescription, logoUrl, popular FROM university WHERE popular = 'true'`,
					},
					{headers},
				).then((result) => {
					this.listPopularUniversities = result.data

					/* save json list to session storage */
					let _json = JSON.stringify(this.listPopularUniversities)
					sessionStorage.setItem(_tag, _json)
				})
			}
		},
		initializeButtonScroll() {
			this.isListUniversitiesMinScroll =
				this.listUniversitiesScrollLeft === this.listUniversitiesMinScroll
			this.isListUniversitiesMaxScroll =
				Math.floor(this.listUniversitiesScrollLeft) >= Math.floor(this.listUniversitiesMaxScroll)
		},
		initializeOnScrollListUniversities() {
			let element = document.getElementById('listUniversities')
			element.addEventListener('scroll', () => {
				this.listUniversitiesScrollLeft = element.scrollLeft
				this.initializeButtonScroll()
			})
			this.listUniversitiesMaxScroll = element.scrollWidth - element.getBoundingClientRect().width
			this.initializeButtonScroll()
		},
		scrollListUniversities(direction) {
			let element = document.getElementById('listUniversities')
			let scrollOffset = window.innerWidth / 2.64
			if (direction === 0) {
				// left
				element.scrollTo({
					behavior: 'smooth',
					left: this.listUniversitiesScrollLeft + scrollOffset,
				})
			} else {
				// right
				element.scrollTo({
					behavior: 'smooth',
					left: this.listUniversitiesScrollLeft - scrollOffset,
				})
			}
		},
		onClickListItem(_id) {
			/*this.$router.push({
				path: 'detail',
				query: {
					id: _id,
				},
				params: {
					'test': 'param-value',
				}
			}).then()*/
			/* open university detail in new tab */
			let _route = this.$router.resolve({
				path: 'detail',
				query: {'id': _id,},
			})
			window.open(_route.href, '_blank')
		}
	}
}
