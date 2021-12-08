import {settingApi} from "@/assets/js/apiUrl";

import AccessScreenDashboard from "@/components/dashboard/AccessScreenDashboard";
import UniversitiesScreenDashboard from "@/components/dashboard/UniversitiesScreenDashboard";
import SettingScreenDashboard from "@/components/dashboard/SettingScreenDashboard";
import VisitorScreenDashboard from "@/components/dashboard/VisitorScreenDashboard";
import TryOutScreenDashboard from "@/components/dashboard/TryOutZoomScreenDashboard";

export default {
	name: 'DashboardPage',
	components: {
		AccessScreenDashboard,
		UniversitiesScreenDashboard,
		SettingScreenDashboard,
		VisitorScreenDashboard,
		TryOutScreenDashboard,
	},
	data() {
		return {
			navigations: [
				{
					'title': 'Akses',
					'screen': AccessScreenDashboard,
				},
				{
					'title': 'Universitas',
					'screen': UniversitiesScreenDashboard,
				},
				{
					'title': 'Setelan',
					'screen': SettingScreenDashboard,
				},
				{
					'title': 'Pengunjung',
					'screen': VisitorScreenDashboard,
				},
				{
					'title': 'Try out dan Zoom',
					'screen': TryOutScreenDashboard,
				},
			],
			selectedNavigation: 0,
		}
	},
	methods: {
		onClickNavigation(_index) {
			if (this.selectedNavigation !== _index)
				this.selectedNavigation = _index
		},
		testConnection() {
			this.axios.post(
				settingApi,
				{
					'request': 'get-access',
				},
				{
					headers: {
						'Content-Type': 'text/plain',
					},
				},
			).then(result => {
				let _data = result.data['data']
				console.log(_data)
			})
		},
	},
}
