import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条 样式
import dayjs from 'dayjs'
import wrapper from './components/system/Wrapper/index';
import ueditor from './components/ueditor/index';
Vue.component('Wrapper', wrapper);
Vue.component('ueditor', ueditor);
Vue.prototype.$dayjs = dayjs;
Vue.use(iView);

/**
 * axios的处理
 */
const dev = 'http://localhost:8888';
axios.defaults.baseURL = dev;



Vue.config.productionTip = false;

/**
 * 路由的全局前置守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress 开启一个进度条
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("to:",to);
    if (sessionStorage.getItem('token')) {
      next()
    }else{
      if(to.path.match('system')){
        next('/system/login');
        // admin登录密码 123456a
      }else{
        next('/login');
      }
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
