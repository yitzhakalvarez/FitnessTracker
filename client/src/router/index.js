import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/ExerciseList:id',
    name: 'ExerciseList',
    component: () => import('../views/ExerciseList.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: {
      auth: true
    }
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
