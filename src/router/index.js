import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Hello from '@/components/Hello'
import SignIn from '@/components/SignIn'
import Panel from '@/components/Panel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '/',
          component: Panel
        },
        {
          path: '/stationManage',
          component: Hello
        },
        {
          path: '/labelManage',
          component: Hello
        }
      ]
    },
    {
      path: '/login',
      name: 'signIn',
      component: SignIn
    }
  ]
})
