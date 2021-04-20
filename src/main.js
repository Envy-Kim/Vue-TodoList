import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMoment from 'vue-moment'
import moment from "moment";

moment.locale("ko"); // vue-moment 사용시 언어를 한글로 설정
Vue.use(VueMoment, {moment})

Vue.config.productionTip = false

// css
import '@/assets/font/font.css';
import '@/assets/css/reset.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
