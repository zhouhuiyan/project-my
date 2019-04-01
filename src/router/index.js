import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      // component:resolve =>
      component: () => import("../views/home/index")
    },
    {
      path: "/system/login",
      name: "system",
      component: () => import("../views/system/login/index")
    },
    {
      path: "/system",
      name: "system",
      meta: {
        requiresAuth: true
      },
      component: () => import("../views/system/container/index"),
      children: [
        {
          path: "/users",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          },
        },
        {
          path: "/article",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          },
        },
        {
          path: "/type",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          },
        },
        {
          path: "/permissions",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          },
        }
      ]
    },
    {
      path: "*",
      component: () => import("../views/public/404")
    }
  ]
});
