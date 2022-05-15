import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/reset.css'
import './assets/main.less'
// 高德地图
import "./plugins/amap.js"

// 全局组件
import Back from "./components/back/back.vue"

Vue.component('Back',Back)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
