import Vue from 'vue'
import App from './App.vue'
import router from './router'
// axios npm 설치할 것
// axios 임포트
// import axios from 'axios'

import './assets/css/app.css'
import store from './store'

// axios 설정
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
  router,
  store,

  // template: '<App/>',
  // components: { App }
  render: h => h(App)
}).$mount('#app')
