import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      // component:resolve => 
      component: () => import('../views/home/index'),
    },
    {
      path:'/system/login',
      name:'system',
      component: () => import('../views/system/login/index'),
    },
    {
      path:'/system',
      name:'system',
      meta:{
        requiresAuth:true,
      },
      component: () => import('../views/system/container/index'),
    },
    {
      path:"*",
      component: () => import('../views/public/404'),
    }
  ]
})