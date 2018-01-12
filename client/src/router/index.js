import Vue from 'vue'
import Router from 'vue-router'
import ProductsGrid from '@/components/ProductsGrid'
import Checkout from '@/components/Checkout'
import OrderPlaced from '@/components/OrderPlaced'

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
    },
    {
      path: '/checkout/success',
      name: 'OrderPlaced',
      component: OrderPlaced
    }
  ]
})
