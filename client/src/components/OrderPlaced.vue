<template>
   <v-layout row>
    <v-flex xs12 md6 offset-md3>
      <v-card>
        <v-toolbar dark color="success">
          <v-toolbar-title class="text-xs-center">Success!</v-toolbar-title>
        </v-toolbar>

        <v-card-text class="text-xs-center">
          <h1>Your order was successful!</h1>
          <h4>An email will be sent to {{ email }} </h4>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  mounted () {
    if (!this.$route.params.order) this.$router.push({name: 'ProductsGrid'})
    else {
      this.email = this.$route.params.order.customer.email
    }
  }
}
</script>

<style>

</style>
