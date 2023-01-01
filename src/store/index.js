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
    cart: [],
  },
  getters: {
    getCart(state){
      return state.cart
    },
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
			if(localStorage.getItem('store')) {
        this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
		},
    ADD_TO_CART(state, payload){
      state.cart.push(payload)
    },
    ADD_ITEM_NUM(state,payload){
      const index = state.products[0].products.find(idx => idx.id == payload)
      index.item += 1
    },
    DEL_ITEM_NUM(state,payload){
      const index = state.products[0].products.find(idx => idx.id == payload)
      if (index.item <= 1) {
        index.item = 1 
      } else {
        index.item -= 1
      }
    },
    DELETE_CART(state, payload){
      const index = state.cart.findIndex((idx, i) => idx.id == payload)
      state.cart.splice(index, 1)
    }
  },
  actions: {
    addToCart(context, payload){
      context.commit('ADD_TO_CART',payload)
    },
    addItemsNum(context, payload){
      context.commit('ADD_ITEM_NUM', payload)
    },
    delItemsNum(context, payload){
      context.commit('DEL_ITEM_NUM', payload)
    },
    deleteCart(context, payload){
      context.commit('DELETE_CART', payload)
    },
  },
  modules: {
  }
})
 