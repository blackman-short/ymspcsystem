import Vue from 'vue'
import Router from 'vue-router'

import DashboardPage from '@/pages/dashboard'

Vue.use(Router)

const paths = [
  {
    path: '/',
    component: DashboardPage,
    name: '主页'
  }
]

const routes = new Router({
  routes: paths
})

export default routes
