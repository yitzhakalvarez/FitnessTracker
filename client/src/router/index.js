import Vue from 'vue'
import VueRouter from 'vue-router'

//Routes
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Exercise from '../views/Exercise.vue'
import User from '../models/Users'


Vue.use(VueRouter)

const routes = [
  {
    path: '/FitnessTracker/admin',
    name: 'Admin',
    component: Admin, meta: { IsSecret: true}
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise, meta: { IsSecret: true}
  },
  {
    path: '/FitnessTracker/register',
    name: 'Register',
    component: Register,
  },
  { 
    path: '/FitnessTracker/home', 
    name: 'Home', 
    component: Home,
  },
  { 
    path: '/FitnessTracker/login', 
    name: 'Login', 
    component: Login,
    },
  {
    path: '/FitnessTracker/about',
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

router.beforeEach( (to, from, next) => {
    if( to.meta.IsSecret && !User.CurrentUser) next('/login');
    else next();
});


export default router;
