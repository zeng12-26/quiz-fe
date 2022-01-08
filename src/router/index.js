import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router-config'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: routerConfig,
  base: '/quiz/',
})

export default router
