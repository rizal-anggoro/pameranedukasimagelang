import MainPage from "@/components/MainPage";
import UniversitiesPage from "@/components/UniversitiesPage";
import DetailPage from "@/components/DetailPage";
import TestPage from "@/components/TestPage";
import NotFoundPage from "@/components/NotFoundPage";
import BuilderPage from "@/components/BuilderPage";
import BuilderPreviewPage from "@/components/BuilderPreviewPage";
import DashboardPage from "@/components/DashboardPage";
import ParsePage from "@/components/ParsePage";
import CheckPage from "@/components/CheckPage";
import SortPage from "@/components/SortPage";

export const routesData = [
	{path: '/', component: MainPage},
	{path: '/main', component: MainPage},
	{path: '/universities', component: UniversitiesPage},
	{path: '/detail', component: DetailPage},
	{webApp: true, path: '/test', component: TestPage},
	{path: '*', component: NotFoundPage},
	{webApp: true, path: '/builder', component: BuilderPage},
	{webApp: true, path: '/builder-preview', component: BuilderPreviewPage},
	{webApp: true, path: '/dashboard', component: DashboardPage},
	{webApp: true, path: '/parse', component: ParsePage},
	{webApp: true, path: '/check', component: CheckPage},
	{webApp: true, path: '/sort', component: SortPage},
]
