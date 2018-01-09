<template>
  <v-layout row>
    <v-flex xs12 md6 offset-md3>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title class="text-xs-center">Checkout</v-toolbar-title>
        </v-toolbar>

        <v-list subheader>
          <v-subheader>Products</v-subheader>
            <v-list-tile avatar v-for="item in cart" v-bind:key="item.product.title">
              <v-list-tile-avatar>
                <img v-bind:src="item.product.image"/>
              </v-list-tile-avatar>
              
              <v-list-tile-content>
                <!-- <v-list-tile-title v-html="item.product.title"></v-list-tile-title> -->
                <v-list-tile-title>{{ item.product.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Quantity: {{ item.quantity }}</v-list-tile-sub-title>
              </v-list-tile-content>
              
              <v-list-tile-action>
                <v-btn flat icon @click="removeProduct(item.product)">
                  <v-icon color="red lighten-1">remove_circle</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list two-line subheader>
          <v-subheader>Cost</v-subheader>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ totalCost }} SEK</v-list-tile-title>

              <v-list-tile-sub-title>({{ taxCost }} SEK Tax)</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      cart: this.$store.state.cart,
      totalCost: 0,
      taxPercentage: 0.25,
      taxCost: 0
    }
  },
  methods: {
    removeProduct (product) {
      this.$store.dispatch('removeProduct', product)
      this.calculateTotalCosts()
    },
    calculateTotalCosts () {
      this.totalCost = this.calculateProductsCost(this.cart)
      this.taxCost = this.calculateTaxCosts(this.totalCost)
    },
    calculateProductsCost (items) {
      let totalCost = 0

      items.forEach(item => {
        totalCost += item.product.price * item.quantity
      })

      return totalCost
    },
    calculateTaxCosts (totalCost) {
      return totalCost * this.taxPercentage
    }
  },
  mounted () {
    this.calculateTotalCosts()
  }
}
</script>

<style>

</style>
