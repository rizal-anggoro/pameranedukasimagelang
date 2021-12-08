import AppBarDetail from '@/components/detail/AppBarDetail'
import MenuDetail from "@/components/detail/MenuDetail";
import ContentScreenDetail from '@/components/detail/ContentScreenDetail'
import ContentScreenDetail2 from "@/components/detail/ContentScreenDetail2";

import {EventBus} from "@/utils/scripts/eventBusScript";
import {headers} from "@/assets/js/apiUrl";
import {universitiesApi} from "@/assets/js/apiUrl";
import {settingApi} from "@/assets/js/apiUrl";

export default {
	name: 'DetailPage',
	components: {
		AppBarDetail,
		MenuDetail,
		ContentScreenDetail,
		ContentScreenDetail2,
	},
	data() {
		return {
			contentScreen: [
				ContentScreenDetail,
				ContentScreenDetail2,
			],
			dataType: 0,
			isMenuVisible: false,
			universityId: '',
			currentDateTime: '',
			listDateRange: [],
		}
	},
	created() {
		this.initializeRoute()
		EventBus.$on('onClickMenu', () => {
			if (!this.isMenuVisible)
				this.isMenuVisible = true
			this.disableWindowScroll()
		})
		EventBus.$on('onClickCloseMenu', () => {
			if (this.isMenuVisible)
				this.isMenuVisible = false
			this.enableWindowScroll()
		})
	},
	mounted() {
		this.resetScrollToTop()
	},
	methods: {
		resetScrollToTop() {
			window.scrollTo({
				top: 0,
			})
		},
		initializeRoute() {
			let _query = this.$route.query
			this.universityId = _query.id;
			this.fetchDataFromDatabase()
			this.fetchDateRangeFromDatabase()
		},
		fetchDataFromDatabase() {
			this.axios.post(
				universitiesApi,
				{
					'request': 'query-data',
					'sql': `SELECT categoryData FROM university WHERE id = '${this.universityId}'`
				},
				{headers}
			).then(result => {
				if (result.data['categoryData'] !== null) {
					this.dataType = 1
				}
			})
		},
		fetchDateRangeFromDatabase() {
			this.axios.post(
				settingApi,
				{
					'request': 'query-data',
					'sql': `SELECT data FROM setting WHERE \`key\` = 'dateRange'`,
				},
				{headers},
			).then(result => {
				if (result.data['data'] !== null)
					this.listDateRange = JSON.parse(result.data['data'])

				/* initialize current date time */
				let _currentDateTime = new Date()
				let _date = _currentDateTime.getDate()
				_date = _date < 10 ? `0${_date}` : _date
				let _month = _currentDateTime.getMonth() + 1
				_month = _month < 10 ? `0${_month}` : _month
				let _year = _currentDateTime.getFullYear()
				this.currentDateTime = `${_date}-${_month}-${_year}`

				/* update visitor */
				this.updateVisitor()
			})
		},
		updateVisitor() {
			let _dateIndex = this.listDateRange.indexOf(this.currentDateTime)
			if (_dateIndex !== -1) {
				this.axios.post(
					universitiesApi,
					{
						'request': 'update-visitor',
						'id': this.universityId,
						'index': _dateIndex,
					},
					{headers},
				).then(result => {
					console.log(result.data)
				})
			}
		},
		disableWindowScroll() {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop
			let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
			window.onscroll = function () {
				window.scrollTo({
					top: scrollTop,
					left: scrollLeft,
				})
			}
		},
		enableWindowScroll() {
			window.onscroll = function () {}
		}
	}
}
