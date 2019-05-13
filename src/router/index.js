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
          path: "view",
          component: () => import("../views/pages/view/index"),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: "/system/login",
      name: "system",
      component: () => import("../views/system/login/index")
    },
    {
      path: "/system",
     
      meta: {
        requiresAuth: true
      },
      component: () => import("../views/system/container/index"),
      children: [
        {
          path: "users",
          component: () => import("../views/system/users/index"),
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: "list",
              component: () => import("../views/system/users/list"),
              meta:{
                requiresAuth:true,
              } 
            },
            {
              path: "add",
              component: () => import("../views/system/users/add"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "view",
              component: () => import("../views/system/users/view"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "edit",
              component: () => import("../views/system/users/edit"),
              meta:{
                requiresAuth:true,
              }
            }
          ]
        },
        {
          path: "article",
          component: () => import("../views/system/article/index"),
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: "list",
              component: () => import("../views/system/article/list"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "add",
              component: () => import("../views/system/article/add"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "view",
              component: () => import("../views/system/article/view"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "edit",
              component: () => import("../views/system/article/edit"),
              meta:{
                requiresAuth:true,
              }
            }
          ]
        },
        {
          path: "type",
          component: () => import("../views/system/type/index"),
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: "list",
              component: () => import("../views/system/type/list"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "add",
              component: () => import("../views/system/type/add"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "view",
              component: () => import("../views/system/type/view"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "edit",
              component: () => import("../views/system/type/edit"),
              meta:{
                requiresAuth:true,
              }
            }
          ]
        },
        {
          path: "review",
          component: () => import("../views/system/review/index"),
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: "list",
              component: () => import("../views/system/review/list"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "view",
              component: () => import("../views/system/review/view"),
              meta:{
                requiresAuth:true,
              }
            },
          ]
        },
        {
          path: "permissions",
          component: () => import("../views/system/permissions/index"),
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: "list",
              component: () => import("../views/system/permissions/list"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "add",
              component: () => import("../views/system/permissions/add"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "view",
              component: () => import("../views/system/permissions/view"),
              meta:{
                requiresAuth:true,
              }
            },
            {
              path: "edit",
              component: () => import("../views/system/permissions/edit"),
              meta:{
                requiresAuth:true,
              }
            }
          ]
        }
      ]
    },
    {
      path: "*",
      component: () => import("../views/public/404")
    }
  ]
});
