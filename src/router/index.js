import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import b from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/b',
      name: 'b',
      component: b
    }
  ], mode: 'history'
})
