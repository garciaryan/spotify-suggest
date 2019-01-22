import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authUrl: '',
    loggedIn: false,
    code: ''
  },
  mutations: {
    logIn(state){
      state.loggedIn = true;
    }
  },
  actions: {

  }
})
