import Vue from 'vue'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
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

const firebaseConfig = {
  apiKey: 'AIzaSyATv2KnVPciaheggqGzqoiNUwgMKcyDD00',
  authDomain: 'cryptocurrencydemo.firebaseapp.com',
  databaseURL: 'https://cryptocurrencydemo.firebaseio.com',
  projectId: 'cryptocurrencydemo',
  storageBucket: 'cryptocurrencydemo.appspot.com',
  messagingSenderId: '838379960197',
  appId: '1:838379960197:web:3cf7bea008ea7c2a1336ec'
};
fb.initializeApp(firebaseConfig) 


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
