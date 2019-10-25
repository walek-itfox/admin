import * as fb from 'firebase'
import router from '@/router'

class User {
  constructor (id) {
    this.id = id
  }
} 

export default {
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    login (state, payload) {
      state.user = payload,
      state.isAuthenticated = true
    },
    logout (state) {
      state.user = null,
      state.isAuthenticated = false
    }
  },
  actions: {
    async login ({state, commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('login', new User(user.uid))
        commit('setLoading', false)
        commit('setError', null)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      } 
    },
    logout ({commit}) {
      fb.auth().signOut()
      .then((response) => {
        commit('logout'),
        commit('setError', null)
        router.push('/login')
      })
      .catch((error) => {
        console.log(error)
        commit('setError', null)
        commit('setError', error.message)
      })
    },
    async getUser ({state, commit}) {
      const db = fb.firestore()

      let res = await db.collection(`users/${state.user.id}/wallet`).get();
      res.forEach(doc => {
        state.user.wallet = doc.id
        state.user.balance = doc.data().balance
      })
        // .then(res => {
        //   res.forEach(doc => {
        //     state.user.wallet = doc.id
        //     state.user.balance = doc.data().balance
        //   })
        // })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userId (state) {
      console.log(state.user)
      return state.user.id
    },
    walletId (state) {
      return state.user.wallet
    },
    balance (state) {
      return state.user.balance
    },
    isAuthenticated (state) {
      let currUser = fb.auth().currentUser
      if (currUser && !state.isAuthenticated) {
        const u = new User(currUser.uid)
        state.user = u
        state.isAuthenticated = true
      }
      return state.isAuthenticated
    }

  }
}
