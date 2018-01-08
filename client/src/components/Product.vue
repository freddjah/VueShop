<template>
  <div>
    <v-card-media :src="product.image" height="200px" />

    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">{{ product.title }}</h1>
        <h3>{{ product.price }} kr</h3>
        <product-rating v-bind:rating="product.rating"/>
      </div>
    </v-card-title>

    <v-card-text>
      <h3 class="body-2">DESCRIPTION:</h3>
      <p>{{ product.description }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="success"><v-icon>add_shopping_cart</v-icon>Add to cart</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import ProductRating from '@/components/ProductRating'

export default {
  props: ['product'],
  components: {
    ProductRating
  }
}
</script>

<style>

</style>
