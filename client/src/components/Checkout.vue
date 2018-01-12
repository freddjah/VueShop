<template>
  <v-layout row>
    <v-flex xs12 md6 offset-md3>
      <cart-information/>

      <customer-information/>
    </v-flex>
  </v-layout>
</template>

<script>
import CartInformation from '@/components/checkout_components/CartInformation'
import CustomerInformation from '@/components/checkout_components/CustomerInformation'

export default {
  name: 'Checkout',
  components: {
    CartInformation,
    CustomerInformation
  }
}
</script>

<style>

</style>
