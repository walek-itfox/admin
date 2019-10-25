import Vue from 'vue'
import Router from 'vue-router'
import * as fb from 'firebase'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'

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
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = fb.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router
