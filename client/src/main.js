import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios';

import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = ""

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");