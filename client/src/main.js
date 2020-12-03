import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";

import "buefy/dist/buefy.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
