import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help.vue'
import Users from '../views/Users.vue'
import Detail from '../views/Detail.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  // redirect
  {
    path: "/all-users",
    redirect: "/users"
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // catchall
  {
    path: ':catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
