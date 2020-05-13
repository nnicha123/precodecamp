import Vue from 'vue'
import Vuex from 'vuex'

// Vuex is the state management system
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bytes:0,
    totalBytes:0,
    bps:0,
    bpk:1,
    player:{
      name:"",
      level:0,
      nextLevel:100,
      increase:3
    },
    power_ups:[],
    updates:[

    {
      name:"Intern",
      cost:50,
      increase:1.15,
      bps:0.1,
      quantity:0,
      unlocksAt:0
    },
    {
      name:"Junior Developer",
      cost:100,
      increase:1.2,
      bps:0.5,
      quantity:0,
      unlocksAt:1
    },
    {
      name:"Web Developer",
      cost:300,
      increase:1.4,
      bps:1,
      quantity:0,
      unlocksAt:2
    }
    
    ]
  },
  mutations: {
  },
  getters: {

  }
})
