import Vue from 'vue'
import App from './App.vue'
import User from './componenets/User.vue'

Vue.component('app-user',User)

new Vue({
  el: '#app',
  render: h => h(App)
})
