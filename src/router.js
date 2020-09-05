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
      name: "home",
      component: () => import("@/views/Home.vue")
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
    },
    {
      path: "/buju",
      name: "Buju",
      component: () => import("@/views/buju")
    },
    {
      path: "/multiplechoice",
      name: "Multiplechoice",
      component: () => import("@/views/Multiplechoice")
    }
  ]
});
