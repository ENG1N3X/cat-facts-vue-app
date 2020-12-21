import Vue from "vue";
import App from "./App.vue";
import scss from "./assets/scss/index.scss";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  scss,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
