import { createStore } from 'vuex'

import data from '../jsons/drops.json'
export default createStore({
  state: {
    drops: [data]
  },
  getters: {
    getDrops(state) {
      return state.drops
    }
  },
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('sto')) {
        this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
		},
  },
  actions: {
  },
  modules: {
  }
})
 