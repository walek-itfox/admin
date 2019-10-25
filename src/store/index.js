import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import user from './user'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    user,
    common
  }
})
