import Vue from 'vue'
import App from './App.vue'
//Add as global component (can be used anywhere) (previous option)
import User from './componenets/User.vue'

Vue.component('app-user',User)

new Vue({
  el: '#app',
  render: h => h(App)
})
