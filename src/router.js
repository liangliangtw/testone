import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Vuextest",
      component: () => import("@/views/Vuextest")
    },
    {
      path: "/review",
      name: "Review",
      component: () => import("./views/Review.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/mixin",
      name: "Mixin",
      component: () => import("@/views/Mixin.vue")
    },
    {
      path: "/chuanzhi",
      name: "Chuanzhi",
      component: () => import("@/views/Chuanzhi/index")
    },
    {
      path: "/crossDomain",
      name: "CrossDomain",
      component: () => import("@/views/crossDomain")
    },
    {
      path: "/router",
      name: "Router",
      component: () => import("@/views/Router")
    }
  ]
});
