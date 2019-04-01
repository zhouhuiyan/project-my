import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("../views/pages/index"),
      children: [
        {
          path: "/",
          component: () => import("../views/pages/home/index")
        },
        {
          path: "login",
          component: () => import("../views/pages/login/index")
        },
        {
          path: "register",
          component: () => import("../views/pages/register/index")
        },
        {
          path: "write",
          component: () => import("../views/pages/login/index"),
          meta:{
            requiresAuth:true,
          }
        },
      ]
    },
    {
      path: "/system/login",
      name: "system",
      component: () => import("../views/system/login/index")
    },
    {
      path: "/system",
      name: "systems",
      meta: {
        requiresAuth: true
      },
      component: () => import("../views/system/container/index"),
      children: [
        {
          path: "users",
          component: () => import("../views/system/type/index"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "article",
          component: () => import("../views/system/article/index"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/type",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/permissions",
          component: () => import("../views/system/container/index"),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: "*",
      component: () => import("../views/public/404")
    }
  ]
});
