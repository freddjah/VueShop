<template>
  <v-toolbar>
      <v-toolbar-title>Vueshop</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="smaller-width hidden-md-and-up" color="grey darken-4" flat>
        <v-icon>view_list</v-icon>
      </v-btn>

      <v-btn class="smaller-width hidden-sm-and-down" flat>
        <v-icon>view_list</v-icon>Products
      </v-btn>

      <v-btn class="smaller-width" color="grey darken-4" flat>
        <v-icon class="">shopping_cart</v-icon>
        {{ calculateAmountProductsInCart() }}
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  name: 'Menubar',
  data () {
    return {
      amountProductsInCart: 2
    }
  },
  methods: {
    calculateAmountProductsInCart () {
      let amount = 0

      this.$store.state.cart.forEach(item => {
        amount += item.quantity
      })

      return amount
    }
  },
  mounted () {
    this.amountProductsInCart = this.calculateAmountProductsInCart()
  }
}
</script>

<style>
.smaller-width {
  min-width: 0px;
}
</style>
