import {EventBus} from '@/utils/scripts/eventBusScript'
import VueClamp from 'vue-clamp'
import VirtualList from "vue-virtual-scroll-list/src";
import ListItemUniversities from "@/components/universities/ListItemUniversities";

import {onInputEditTextSearch} from "@/utils/scripts/universitiesPageData";
import {onButtonSearchClick} from "@/utils/scripts/universitiesPageData";
import {universitiesApi} from "@/assets/js/apiUrl";
import {headers} from "@/assets/js/apiUrl";

export const scrollYKey = 'universitiesScreenUniversitiesScrollY'

export default {
	name: 'UniversitiesScreenUniversities2',
	components: {
		VueClamp,
		VirtualList,
	},
	data() {
		return {
			universityCount: 70, /* total university */
			universityCountInIndex: 10,
			selectedIndex: 1,
			listItemUniversities: ListItemUniversities,
			listUniversity: [],
			listUniversitiesFiltered: [],
			filterStatus: 0,
		}
	},
	created() {
		this.resetScroll()
		this.restoreIndexFromCookie()
		this.fetchUniversitiesFromDatabase()

		EventBus.$on(onButtonSearchClick, this.onButtonSearchClick)
		EventBus.$on(onInputEditTextSearch, this.onInputEditTextSearch)
	},
	methods: {
		restoreIndexFromCookie() {
			let _index = this.$cookies.get('selectedIndex')
			this.selectedIndex = _index === null ? 1 : parseInt(_index)
		},
		onClickUniversityIndex(_index) {
			if (this.selectedIndex !== _index) {
				this.selectedIndex = _index
				/* save index to cookie */
				this.$cookies.set('selectedIndex', this.selectedIndex)
				this.fetchUniversitiesFromDatabase()
			}
		},
		fetchUniversitiesFromDatabase() {
			let _tag = 'jsonListUniversity-'
			/* check session storage */
			if (sessionStorage.getItem(`${_tag}${this.selectedIndex}`) !== null) {
				/* load json list university from database */
				let _jsonListUniversity = sessionStorage.getItem(`${_tag}${this.selectedIndex}`)
				if (_jsonListUniversity.length > 0) {
					this.listUniversity = JSON.parse(_jsonListUniversity)

					/* reset scroll to top */
					this.resetScroll()
				}
			} else {
				let _startId = (((this.selectedIndex - 1) * this.universityCountInIndex) + 1)
				let _endId = (this.selectedIndex * this.universityCountInIndex)
				let _select = '`id`, `universityName`, `universityDescription`, `logoUrl`'
				let _sql = `SELECT ${_select} FROM university WHERE sort BETWEEN ${_startId} AND ${_endId} ORDER BY sort + 0`

				/* load json list university from cloud */
				this.axios.post(universitiesApi, {
					'request': 'query-list',
					'sql': _sql,
				}, {headers}
				).then((result) => {
					if (result.data.length > 0) {
						this.listUniversity = result.data

						/* save list universities to session storage */
						let _jsonListUniversity = JSON.stringify(this.listUniversity)
						sessionStorage.setItem(`jsonListUniversity-${this.selectedIndex}`, _jsonListUniversity)

						/* reset scroll to top */
						this.resetScroll()
					} else {
						console.log('error')
					}
				});
			}
		},
		resetScroll() {
			window.scrollTo({
				top: 0,
			})
		},
		scrollToLastPosition() {
			let _scrollY = this.$cookies.get(scrollYKey);
			if (_scrollY != null) {
				window.scrollTo({
					top: _scrollY,
					behavior: "smooth",
				})
			}
		},
		onButtonSearchClick(args) {
			let _searchData = args.data
			if (_searchData.length > 0) {
				this.axios.post(universitiesApi, {
					'request': 'get-university-by-name',
					'name': _searchData,
				}, {
					headers
				}).then((result) => {
					console.log(result.data)
					this.listUniversitiesFiltered = result.data
					if (this.listUniversitiesFiltered.length > 0) {
						this.filterStatus = 1
					} else {
						this.filterStatus = -1
					}
					this.resetScroll()
				});
			} else {
				/* reset filtered list */
				this.filterStatus = 0 /* close search */
			}
		},
		onInputEditTextSearch(args) {
			let _data = args['data']
			if (_data.length === 0) this.filterStatus = 0 /* close search */
			this.resetScroll()
		},
	},
}
