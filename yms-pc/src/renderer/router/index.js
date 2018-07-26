import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'

Vue.use(Router)

const paths = [
  {
    path: '/',
    component: HomePage,
    name: '主页'
  },
  {
    path: '/login',
    component: LoginPage,
    name: '登录'
  },
  {
    path: '/register',
    component: RegisterPage,
    name: '注册'
  }
]

const routes = new Router({
  routes: paths
})

export default routes
