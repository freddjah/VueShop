<template>
  <v-card class="mt-3">
    <v-toolbar dark color="blue-grey darken-3">
      <v-toolbar-title class="text-xs-center">Order placement</v-toolbar-title>
    </v-toolbar>

    <v-form v-model="validation.formIsValid" class="px-4 py-2">
      <v-text-field label="Name" v-model="customerInformation.name" :rules="validation.nameRules" required></v-text-field>
      <v-text-field label="E-mail" v-model="customerInformation.email" :rules="validation.emailRules" required></v-text-field>
      <v-btn flat color="success">Create order</v-btn>
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
          (v) => !!v || 'Name is required'
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          // eslint-disable-next-line
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }
}
</script>

<style>

</style>
