import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

const options = {
  icons: {
    iconfont: 'mdi'
  }
}

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(options),
  components: { App },
  template: '<App/>'
})
