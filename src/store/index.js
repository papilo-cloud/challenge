import { createStore } from 'vuex'

import data from '../jsons/drops.json'
import data1 from '../jsons/products.json'
export default createStore({
  state: {
    drops: [data],
    products: [data1]
  },
  getters: {
    getDrops(state) {
      return state.drops 
    },
    getProducts(state) {
      return state.products[0]
    }
  },
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('st')) {
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
 