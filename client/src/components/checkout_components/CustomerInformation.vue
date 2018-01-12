<template>
  <v-card class="mt-3">
    <v-toolbar dark color="blue-grey darken-3">
      <v-toolbar-title class="text-xs-center">Order placement</v-toolbar-title>
    </v-toolbar>

    <v-form v-model="validation.formIsValid" class="px-4 py-2">
      <v-text-field label="Name" v-model="customerInformation.name" :rules="validation.nameRules" required></v-text-field>
      <v-text-field label="E-mail" v-model="customerInformation.email" :rules="validation.emailRules" required></v-text-field>
      <v-text-field label="Street adress" v-model="customerInformation.street" :rules="validation.streetRules" required></v-text-field>
      <v-text-field label="Zip code" v-model="customerInformation.zipcode" :rules="validation.zipCodeRules" required></v-text-field>
      <v-text-field label="City" v-model="customerInformation.city" :rules="validation.cityRules" required></v-text-field>
      <v-btn flat color="success" @click="submitOrder()" :disabled="!validation.formIsValid">Create order</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'CustomerInformation',
  data () {
    return {
      customerInformation: {
        name: '',
        email: '',
        street: '',
        zipcode: '',
        city: ''
      },
      validation: {
        formIsValid: false,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => /^[a-zA-Z ]{2,30}$/.test(v) || 'Name must be valid. Maximum of 30 characters.'
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          // eslint-disable-next-line
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        streetRules: [
          (v) => !!v || 'Street adress is required',
          (v) => /^\w+(\s\w+)*$/.test(v) || 'Street adress must be valid'
        ],
        zipCodeRules: [
          (v) => !!v || 'Zip code is required',
          (v) => v.length <= 6 || 'Too many characters',
          (v) => /^\d{3}\s?\d{2}$/.test(v) || 'Zip code must be valid. Example: 123 45'
        ],
        cityRules: [
          (v) => !!v || 'Street adress is required',
          (v) => /^\w+(\s\w+)*$/.test(v) || 'Street adress must be valid'
        ]
      }
    }
  },
  methods: {
    submitOrder () {
      // TODO:
      // Implement API and send customer information to backend. Get json response, send it to route OrderPlaced as following.
      let fakeOrderInformation = {
        products: [
          {
            product: {
              title: 'En exempel-produkt',
              ean: '3434',
              price: 100,
              description: 'Det bästa exemplaret vi har.',
              image: 'https://cnet1.cbsistatic.com/img/Q30vGlKlvN2NvEcLGyXUqxtMHlc=/770x433/2016/03/24/ef1abe9b-8d62-4b1d-b6f6-cbf7d91cd84e/iphone-se-21.jpg',
              quantityInStock: 10,
              rating: 5
            },
            quantity: 2
          }
        ],
        customer: {
          name: 'Fredrik Ekloof',
          email: 'freddyboi@entertainment.com',
          streetAdress: 'New York Avenue 12',
          zipcode: '123 45',
          city: 'Toronto'
        },
        orderDate: '2017-06-12 12:47'
      }
      this.$router.push({name: 'OrderPlaced', params: {order: fakeOrderInformation}})
    }
  }
}
</script>

<style>

</style>
