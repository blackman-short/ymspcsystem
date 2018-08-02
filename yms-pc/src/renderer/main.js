import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import showMsgDialog from './common/showMsgDialog'

// 引入字体库
import 'font-awesome/css/font-awesome.min.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(showMsgDialog)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
