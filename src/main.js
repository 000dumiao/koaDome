import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './http'
import './mock'
import axios from 'axios'
import ProgressBar from 'vuejs-progress-bar'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.use(ProgressBar)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = http;

   // - 设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等
axios.defaults.timeout = 10000;
   // - 设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
