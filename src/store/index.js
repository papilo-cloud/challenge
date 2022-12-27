import { createStore, storeKey } from 'vuex'

import data from '../jsons/drops.json'
import data1 from '../jsons/products.json'
export default createStore({
  state: {
    drops: [data],
    products: [data1],
    pick: 'all',
    show1: !true,
    show2: !true,
  },
  getters: {
    getDrops(state) { 
      return state.drops 
    },
    getProduct(state) {
      return state.products[0]
    },
    getProducts(state) {
      if (state.pick == 'all') {
        return state.products[0].products
      }
        return state.products[0].products.filter(task => task.category.includes(state.pick) || 
        task.creator.includes(state.pick) || task.year.includes(state.pick))
    }
  },
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('stppp')) {
        this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('stor'))));
      }
		},
    SHOW_SIDE(state, payload){
      state.show1 = payload
    },
  },
  actions: {
    showSide(context, payload){
      context.commit('SHOW_SIDE',payload)
    }
  },
  modules: {
  }
})
 