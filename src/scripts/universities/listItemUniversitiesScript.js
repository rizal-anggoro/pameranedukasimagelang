import VueClamp from 'vue-clamp'
/*import {scrollYKey} from "@/scripts/universities/universitiesScreenUniversitiesScript";*/

export default {
	name: 'ListItemUniversities',
	components: {
		VueClamp,
	},
	props: {
		source: {
			type: Object,
			default() {
				return {

				}
			}
		}
	},
	data() {
		return {
			listItemUniversityImage: null,
		}
	},
	methods: {
		showMore(_id) {
			/* save scroll position */
			/*let _scrollY = window.scrollY
			this.$cookies.set(scrollYKey, _scrollY)*/

			/* move route */
			/*this.$router.push({
				path: 'detail',
				query: {
					id: _id,
				},
				params: {
					'test': 'param-value',
				}
			}).then()*/
			/* move to new tab */
			let _route = this.$router.resolve({
				path: 'detail',
				query: {'id': _id,},
			})
			window.open(_route.href, '_blank')
		}
	}
}
