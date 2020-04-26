import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Test from '../pages/addCommodity.vue'
// import Transform from '../pages/transform.vue'

export default new Router({
  defaultEvent:"touchstart",
  routes: [
    {
      path: '/test',
      name:'',
      component: Test,
      meta:{ title:'test' }
    }
  ]
})


