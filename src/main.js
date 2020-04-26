// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueTouch from 'vue-touch';
import router from './router'
import Vselect from 'vue-select'
import http from './utils/request'
import { Select,Option } from 'iview';
import setDocTitle from './utils/setDocTitle';
// import './assets/css/iview.less'
// import './assets/entry.scss';  //main-css

// import "./assets/css/global.scss"
import "./assets/css/reset.css"


Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});
Vue.component('v-select', Vselect)
Vue.component('i-select', Select)
Vue.component('i-option', Option)
Vue.use(setDocTitle)

/**获取用户信息*/
router.beforeEach((to,from,next)=>{
  next();
})

Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
