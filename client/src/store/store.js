import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [
      {
        title: 'En exempel-produkt',
        price: 100,
        description: 'Det bästa exemplaret vi har.',
        image: 'https://cnet1.cbsistatic.com/img/Q30vGlKlvN2NvEcLGyXUqxtMHlc=/770x433/2016/03/24/ef1abe9b-8d62-4b1d-b6f6-cbf7d91cd84e/iphone-se-21.jpg',
        amountInStock: 10,
        rating: 5
      }
    ]
  },
  mutations: {
    addProduct (state, product) {
      state.cart.push(product)
    },
    removeProduct (state, productIndex) {
      state.cart.splice(productIndex, 1)
    }
  },
  actions: {
    removeProduct ({commit}, productIndex) {
      commit('removeProduct', productIndex)
    }
  }
})
