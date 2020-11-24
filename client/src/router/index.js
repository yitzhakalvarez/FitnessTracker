import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Schedule from '../views/Schedule.vue'
import {context} from '../models/context'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAdmin: false, requiresLogin: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAdmin: false, requiresLogin: false },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAdmin: true, requiresLogin: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAdmin: false, requiresLogin: false },
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
    meta: { requiresAdmin: false, requiresLogin: true },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAdmin: false, requiresLogin: false },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let users = context.state.user;
  if (users === null && to.meta.requiresLogin) {
    next('/login')
  } else if (to.meta.requiresAdmin && !user.admin) {
    next('/');
  } else {
    next();
  }
});

export default router