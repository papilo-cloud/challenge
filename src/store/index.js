import { createStore, storeKey } from 'vuex'

import data from '../jsons/drops.json'
import data1 from '../jsons/products.json'
export default createStore({
  state: {
    drops: [data],
    products: [data1],
    pick: 'all',
    show: false
  },
  getters: {
    getDrops(state) {
      return state.drops 
    },
    getProduct(state) {
      return state.products[0].products
    },
    getProducts(state) {
      const y = state.products[0].products.filter(sx => sx.category.includes('Nature')).sort((a, b) => {
        a.name - b.name})
          console.log( y)
          if (state.pick == 'all') {
        // console.log( state.products[0].products)
        return state.products[0].products
      }
        return state.products[0].products.filter(task => task.category.includes(state.pick) || 
        task.creator.includes(state.pick) || task.year.includes(state.pick))
    }
  },
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('st')) {
        this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('stor'))));
      }
		},
  },
  actions: {
  },
  modules: {
  }
})
 