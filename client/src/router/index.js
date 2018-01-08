import Vue from 'vue'
import Router from 'vue-router'
import ProductsGrid from '@/components/ProductsGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ProductsGrid
    }
  ]
})
