import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Log from '../views/Log.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAdmin: true, requiresLogin: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAdmin: false, requiresLogin: false },
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: Home,
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login,
    },
  {
    path: '/log',
    name: 'Log',
    component: Log,
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
  let Users = context.state.user;
  if (Users === null && to.meta.requiresLogin) {
    next('/login')
  } else if (to.meta.requiresAdmin && !user.admin) {
    next('/home');
  } else {
    next();
  }
});

export default router