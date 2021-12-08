import {EventBus} from '@/utils/scripts/eventBusScript'
import VueClamp from 'vue-clamp'
import VirtualList from "vue-virtual-scroll-list/src";
import ListItemUniversities from "@/components/universities/ListItemUniversities";

import {onInputEditTextSearch} from "@/utils/scripts/universitiesPageData";
import {onButtonSearchClick} from "@/utils/scripts/universitiesPageData";

import {headers} from "@/assets/js/apiUrl";
import {universitiesApi} from "@/assets/js/apiUrl";

export const scrollYKey = 'universitiesScreenUniversitiesScrollY'

export default {
	name: 'UniversitiesScreenUniversities',
	components: {
		VueClamp,
		VirtualList,
	},
	data() {
		return {
			listItemUniversities: ListItemUniversities,
			searchModel: '',
			listUniversities: [],
			listUniversitiesFiltered: [],
			filterStatus: 0,
		}
	},
	created() {
		this.resetScroll()
		this.fetchUniversitiesFromDatabase()
		EventBus.$on(onButtonSearchClick, this.onButtonSearchClick)
		EventBus.$on(onInputEditTextSearch, this.onInputEditTextSearch)
	},
	methods: {
		fetchUniversitiesFromDatabase() {
			alert('called')
			this.axios.post(universitiesApi, {
				'request': 'get-universities',
			},
			{headers}).then((result) => {
				this.listUniversities = result.data;

				/* save json to session storage */
				let _jsonListUniversities = JSON.stringify(this.listUniversities)
				sessionStorage.setItem('jsonListUniversities', _jsonListUniversities)
				console.log('saved')
			});
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
			let searchData = args.data
			if (searchData.length > 0) {
				this.filterListUniversities(args).then((listResult) => {
					if (listResult.length > 0) {
						this.listUniversitiesFiltered = listResult
						this.filterStatus = 1 /* return result*/
					} else {
						this.filterStatus = -1 /* not found */
					}
				})
			} else {
				/* reset filtered list */
				this.filterStatus = 0 /* close search */
			}
		},
		onInputEditTextSearch(args) {
			let _data = args['data']
			if (_data.length === 0) this.filterStatus = 0 /* close search */
		},
		async filterListUniversities(args) {
			let listResult = []
			let searchValue = args.data.toLowerCase()
			for (let index = 0; index < this.listUniversities.length; index++) {
				let universityName = this.listUniversities[index].universityName.toString().toLowerCase()
				if (universityName.indexOf(searchValue) > -1) {
					listResult.push(this.listUniversities[index])
				}
			}
			return listResult
		},
	},
}
