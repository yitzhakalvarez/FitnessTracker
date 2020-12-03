import Vue from 'vue'
import VueRouter from 'vue-router'
import session from '../models/session'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
      { path: '/', name: 'Home', component: Home},
      { path: '/login', name: 'Login', component: Login},
      { path: '/users', name: 'Users', 
        component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue'),
        beforeEnter: checkSessionUser
      },
      { path: '/Register', name: 'Register', component: Register},
      { path: '/friendlist', name: 'Friendlist', 
        component: () => import(/* webpackChunkName: "Friendlist" */ '../views/Friends.vue'),
        beforeEnter: checkSessionUser
    },
      { path: '/adminusers', 
        name: 'AdminUsers', 
        component: () => import(/* webpackChunkName: "AdminUsers" */ '../views/Admin.vue'),
        beforeEnter: checkSessionUser
      },
      { 
        path: '/fitnesstracker', 
        name: 'FitnessTracker', 
        component: () => import(/* webpackChunkName: "FitnessTracker" */ '../views/Tracker.vue'),
        beforeEnter: checkSessionUser
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function checkSessionUser (to, from, next) {
  if(session.user){
    next();
  }else{
    next('Login');
  }
}

function checkSessionUserType (to, from, next) {
  if(session.usertype == 5){
    next();
  }else{
    next('Users');
  }
}