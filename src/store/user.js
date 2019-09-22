import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {},
  actions: {},
  getters: {
    user (state) {
      return state.user
    }
  }
}