import * as fb from 'firebase'

export default {
    state: {
      events: [
      ]
    },
    mutations: {
      createEvent (state, payload) {
        state.events.push(payload)
      }
    },
    actions: {
      events ({state, commit}) {
        let db = fb.firestore()
        state.events = []
        db.collection('eventData').get()
        .then((result) => {
            result.forEach((doc) => {
                let ev = { description: doc.data().description }
                commit('createEvent', ev)
                console.log(doc.data().description)
            })
        })
        .catch((error) => {
            console.log(error.message)
        })    
      }
    },
    getters: {
      events (state) {
        return state.events
      },
      eventByName (state) {
        return name => {
          return state.events.find(event => event.name === name)
        }
      }
    }
  }
  