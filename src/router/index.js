import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import message from '../components/message/message.vue'

export default new Router({
  routes: [
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
