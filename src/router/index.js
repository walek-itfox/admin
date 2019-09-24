import Vue from 'vue'
import Router from 'vue-router'
import * as fb from 'firebase'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Create from '@/components/User/Create'
import Users from '@/components/User/Users'
import User from '@/components/User/User'
import Events from '@/components/User/Events'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id',
      props: true,
      name: 'User',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = fb.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/login')
  //else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router
