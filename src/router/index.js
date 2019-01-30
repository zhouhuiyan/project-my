import Vue from 'vue'
import VueRouter from 'vue-router'
// import { resolve } from 'q';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      // component:resolve => 
      component: () => import('../views/home/index'),
    }
  ]
})