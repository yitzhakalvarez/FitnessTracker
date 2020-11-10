import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.prototype.$axios = axios;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://fitness-trak.herokuapp.com/";



Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");