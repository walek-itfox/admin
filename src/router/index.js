import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import Create from '@/components/User/Create'
import Users from '@/components/User/Users'
import User from '@/components/User/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/user/:id",
      props: true,
      name: "User",
      component: User
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    }
  ],
  mode: 'history'
})
