<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Vueshop</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-up">
        <v-btn color="grey darken-4" flat icon>
          <v-icon>view_list</v-icon>
        </v-btn>
        <v-btn color="grey darken-4" flat icon>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon>view_list</v-icon>Products
        </v-btn>
        <v-btn flat>
          <v-icon>shopping_cart</v-icon>My Cart
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-container fluid>
      <v-layout>
        <v-flex>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
