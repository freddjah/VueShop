import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function findProductIndex (cart, product) {
  let productIndex = null
  let currentIndex = 0

  cart.forEach(item => {
    if (item.product === product) productIndex = currentIndex
    currentIndex++
  })

  return productIndex
}

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [
      {
        product: {
          title: 'En exempel-produkt',
          price: 100,
          description: 'Det bästa exemplaret vi har.',
          image: 'https://cnet1.cbsistatic.com/img/Q30vGlKlvN2NvEcLGyXUqxtMHlc=/770x433/2016/03/24/ef1abe9b-8d62-4b1d-b6f6-cbf7d91cd84e/iphone-se-21.jpg',
          quantityInStock: 10,
          rating: 5
        },
        quantity: 2
      }
    ]
  },
  mutations: {
    addProduct (state, product) {
      const productIndex = findProductIndex(state.cart, product)
      if (productIndex) state.cart[productIndex].quantity++
      else state.cart.push({product: product, quantity: 1})
    },
    removeProduct (state, product) {
      const productIndex = findProductIndex(state.cart, product)
      if (state.cart[productIndex].quantity > 1) state.cart[productIndex].quantity--
      else state.cart.splice(productIndex, 1)
    }
  },
  actions: {
    addProduct ({commit}, product) {
      commit('addProduct', product)
    },
    removeProduct ({commit}, productIndex) {
      commit('removeProduct', productIndex)
    }
  }
})
