import Vue from 'vue'
import i18n from './locales'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  i18n,
  ...App
}).$mount('#app')
