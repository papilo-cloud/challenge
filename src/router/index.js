import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Marketplace from '../views/Marketplace.vue'
import Auctions from '../views/Auctions.vue'
import Drops from '../views/Drops.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Cart from '../components/Cart.vue'
import LiveBids from '../components/LiveBids.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  }, 
  {
    path: '/marketplace/:name', 
    name:'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/marketplace/Cart/:name', 
    name:'Cart',
    component: Cart
  },
  {
    path: '/auctions',
    name: 'Auctions',
    component: Auctions
  },
  {
    path: '/auctions/liveBids/:name',
    name: 'LiveBids',
    component: LiveBids
  },
  {
    path: '/drops',
    name: 'Drops',
    component: Drops
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
