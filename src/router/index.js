import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import basicTop from '@/components/basicTop'
import crudTop from '@/components/crudTop'
import appTop from '@/components/appTop'
import basic1 from '@/components/1-1'
import basic2 from '@/components/1-2'
import basic3 from '@/components/1-3'
import basic4 from '@/components/1-4'
import crud1 from '@/components/2-1'
import app1 from '@/components/4-1'
import app2 from '@/components/4-2'
import app3 from '@/components/4-3'
import app4 from '@/components/4-4'
import app5 from '@/components/4-5'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/basic',
      name: 'basicTop',
      component: basicTop
    },
    {
      path: '/basic1',
      name: 'basic1',
      component: basic1
    },
    {
      path: '/basic2',
      name: 'basic2',
      component: basic2
    },
    {
      path: '/basic3',
      name: 'basic3',
      component: basic3
    },
    {
      path: '/basic4',
      name: 'basic4',
      component: basic4
    },
    {
      path: '/crud',
      name: 'crudTop',
      component: crudTop
    },
    {
      path: '/crud1',
      name: 'crud1',
      component: crud1
    },
    {
      path: '/app',
      name: 'appTop',
      component: appTop
    },
    {
      path: '/app1',
      name: 'app1',
      component: app1
    },
    {
      path: '/app2',
      name: 'app2',
      component: app2
    },
    {
      path: '/app3',
      name: 'app3',
      component: app3
    },
    {
      path: '/app4',
      name: 'app4',
      component: app4
    },
    {
      path: '/app5',
      name: 'app5',
      component: app5
    },
  ]
})
