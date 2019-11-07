import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/cms',
    name: 'cms',
    component: () => import('../layout/Cms.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'system',
        name: 'system',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'admin/add',
        name: 'admin/add',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'admin/list',
        name: 'admin/list',
        component: () => import('../views/Dashboard.vue')
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/Example.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
