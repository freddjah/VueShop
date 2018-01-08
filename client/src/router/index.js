import Vue from 'vue'
import Router from 'vue-router'
import ProductsGrid from '@/components/ProductsGrid'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsGrid',
      component: ProductsGrid
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
