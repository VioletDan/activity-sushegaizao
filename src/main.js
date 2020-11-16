import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from 'api'
import filters from 'common/filter/filter'
import imonitor from './common/js/monitor'

// eslint-disable-next-line no-unused-vars
import VConsole from 'common/js/vconsole'

// eslint-disable-next-line no-unused-vars
import rem from 'common/js/rem'

// import VueDragResize from 'vue-drag-resize'

import 'common/css/base.css'
import 'common/css/common.scss'
import './components'
// import 'amfe-flexible'

// 注入全局过滤器
Object.keys(filters).forEach(v => {
  Vue.filter(v, filters[v])
})

Vue.prototype.$api = api
Vue.prototype.$code = '0000'
Vue.config.productionTip = false
Vue.prototype.$imonitor = imonitor
// Vue.component('vue-drag-resize', VueDragResize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
