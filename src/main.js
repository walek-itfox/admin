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
new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(options),
  components: { App },
  template: '<App/>',
  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyBKiQ3AZt31_Fpy1MTKGIgcft4D2mkbKNg",
      authDomain: "admin-panel-6ac0c.firebaseapp.com",
      databaseURL: "https://admin-panel-6ac0c.firebaseio.com",
      projectId: "admin-panel-6ac0c",
      storageBucket: "",
      messagingSenderId: "347720114115",
      appId: "1:347720114115:web:38937d17aa74665b002776"
    }
    fb.initializeApp(firebaseConfig)
  }
})
