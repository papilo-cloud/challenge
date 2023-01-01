import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Marketplace from '../views/Marketplace.vue'
import Auctions from '../views/Auctions.vue'
import Drops from '../views/Drops.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Cart from '../components/Cart.vue'
import LiveBids from '../components/LiveBids.vue'
import ShippingDetails from '../components/ShippingDetails.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import PaymentDetails from '../components/PaymentDetails.vue'

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
    component: Cart,
    children: [
      {
        path: 'shopping',
        name:'ShoppingCart',
        component: ShoppingCart
      },
      {
        path: 'shipping',
        name:'ShippingCart',
        component: ShippingDetails
      },
      {
        path: 'payment',
        component: PaymentDetails
      },
    ]
  },
  // {
  //   path: '/marketplace/Cart/all/shopping', 
  //   name:'ShoppingCart',
  //   component: ShoppingCart
  // },
  // {
  //   path: '/marketplace/Cart/all/shipping', 
  //   name:'ShippingDetails',
  //   component: ShippingDetails
  // },
  // {
  //   path: '/marketplace/Cart/all/payment', 
  //   name:'PaymentDetails',
  //   component: PaymentDetails
  // },
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
