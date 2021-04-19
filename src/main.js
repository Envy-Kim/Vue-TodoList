import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueMoment from 'vue-moment'
import moment from 'moment'

moment.locale('ko')
Vue.use(vueMoment, { moment })

Vue.config.productionTip = false

// css
import '@/assets/font/font.css';
import '@/assets/css/reset.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
