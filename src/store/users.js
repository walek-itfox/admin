export default {
  state: {
    users: [
      {
        id: '001',
        login: 'user1',
        email: 'user1@mail.ru',
        password: '123'
      },
      {
        id: '002',
        login: 'user2',
        email: 'user2@mail.ru',
        password: '12323'
      },
      {
        id: '003',
        login: 'user3',
        email: 'user3@mail.ru',
        password: '123221'
      }
    ]
  },
  mutations: {
    createUser (state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    createUser ({commit}, payload) {
      payload.id = Math.random()
      commit('createUser', payload)  
    }
  },
  getters: {
    users (state) {
      return state.users
    },
    userById (state) {
      return id => {
        return state.users.find(user => user.id === id)
      }
    }
  }
}