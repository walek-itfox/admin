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
  mutations: {
    login (state, payload) {
      state.user = payload
    },
    logout (state) {
      state.user = null
    }
  },
  actions: {
    login ({commit}, {email, password}) {
      fb.auth().signInWithEmailAndPassword(email, password)
      .then((auth) => {
        const u = new User(auth.user.uid)
        commit('login', u) 
      })
      .catch((error) => {
        console.log(error)
      }) 
    },
    logout ({commit}) {
      fb.auth().signOut()
      .then((response) => {
        commit('logout')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
