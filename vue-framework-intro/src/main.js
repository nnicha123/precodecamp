import Vue from 'vue'
import App from './App.vue'
//Add as global component (can be used anywhere) (previous option)
import User from './componenets/User.vue'
import Blog from './componenets/Blog.vue'
import Account from './componenets/Account.vue'
Vue.use(VueRouter);

const routes = [
  {path:'/blog', component:Blog},
  {path:'/account', component:Account},
  {path:'/', component:User}
]

const router = new VueRouter({
  routes:routes
})

Vue.component('app-user',User)

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
