import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import eventBus from "@/components/evenBus.js";

// Vue.prototype.$EventBus = new Vue();
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import test from "./components/text.js";
Vue.use(test);
