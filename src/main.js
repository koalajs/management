import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/theme/index.css'
import './assets/public.css'
import ElementUI from 'element-ui'
import i18n from './plugins/i18n'
import VueCompositionApi from '@vue/composition-api'

// 用于Mock API数据， 非测试应去除。
import Mock from '@/mock'
Mock.setup()

Vue.use(VueCompositionApi)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
