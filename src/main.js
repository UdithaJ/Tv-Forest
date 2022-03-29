import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Vuetify)

new Vue({
  vuetify : new Vuetify({
    theme: { dark: true },
  }),

  router,
  render: h => h(App)
}).$mount('#app')
