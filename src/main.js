import Vue from 'vue'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
/* import admin from 'firebase-admin' */
import store from './store'
import App from './App'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

const options = {
  icons: {
    iconfont: 'md'
  }
}

Vue.use(Vuetify)

/* eslint-disable no-new */
let app = ''

/* const firebaseConfig = {
  apiKey: 'AIzaSyBKiQ3AZt31_Fpy1MTKGIgcft4D2mkbKNg',
  authDomain: 'admin-panel-6ac0c.firebaseapp.com',
  databaseURL: 'https://admin-panel-6ac0c.firebaseio.com',
  projectId: 'admin-panel-6ac0c',
  storageBucket: '',
  messagingSenderId: '347720114115',
  appId: '1:347720114115:web:38937d17aa74665b002776'
} */
const firebaseConfig = {
  apiKey: 'AIzaSyAMvwJbYrqwziV6b3YBQ1OiFfT3LiryFho',
  authDomain: 'gomylegsgo.firebaseapp.com',
  databaseURL: 'https://gomylegsgo.firebaseio.com',
  projectId: 'gomylegsgo',
  storageBucket: 'gomylegsgo.appspot.com',
  messagingSenderId: '1097208799256',
  appId: '1:1097208799256:web:8b1d44ed95103ac132e36d'
};
fb.initializeApp(firebaseConfig) 

/* let serviceAccount = require('@/serviceAccountKey')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore()
admin.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      vuetify: new Vuetify(options),
      components: { App },
      template: '<App/>'
    })
  }
}) */
fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      vuetify: new Vuetify(options),
      components: { App },
      template: '<App/>'
    })
  }
}) 
