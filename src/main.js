import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import AppResponsive from 'vue-responsive'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import numeral from 'numeral'
import numFormat from 'vue-filter-number-format'
import VueLazyload from "vue-lazyload"

import {routesData} from "@/routesData";

import {isWebApp} from "@/assets/js/apiUrl"

Vue.config.productionTip = false
let uses = [
  AppResponsive,
  VueRouter,
  VuePageTransition,
  VueCookies,
  VueLazyload,
]
uses.forEach(value => {
  Vue.use(value)
})
Vue.use(VueAxios, axios)
Vue.directive('responsive', AppResponsive)
Vue.filter('numFormat', numFormat(numeral));


let _routes = []
routesData.forEach(item => {
  if (isWebApp) {
    _routes.push({
      path: item['path'],
      component: item['component'],
    })
  } else {
    if (item['webApp'] === undefined) {
      _routes.push({
        path: item['path'],
        component: item['component'],
      })
    }
  }
})

let appRouter = new VueRouter({
  mode: 'history',
  routes: _routes,
  /*base: process.env.BASE_URL,*/
})

new Vue({
  render(view) {
    return view(App)
  },
  router: appRouter,
}).$mount('#app')
