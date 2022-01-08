import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash'

import App from './App.vue'
import router from './router'
import axios from './axios'
import service from './axios/api'
import store from './store'
import { Loading } from 'vant'
import 'vant/lib/index.css'
import './constants/rem.js'

Vue.use(router)
Vue.use(VueRouter)
Vue.prototype.$http = axios
Vue.prototype.path = service
Vue.prototype._ = lodash

Vue.use(Loading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
