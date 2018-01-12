<template>
  <v-layout>
    <v-flex md8 offset-md2>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="product in products" :key="product.title">
            <v-card>
              <product v-bind:product="product"/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Product from '@/components/Product'
export default {
  name: 'ProductsGrid',
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
          title: 'En badboll',
          ean: '959',
          price: 8,
          description: 'Jättefin är den. Och bra.',
          image: 'https://www.reklamballonger.se/wp-content/gallery/badbollar-och-produktkopior/badboll-corona.jpg',
          amountInStock: 10,
          rating: 4
        },
        {
          title: 'En hörlur',
          ean: '224',
          price: 20,
          description: 'Låter bra gör den. Och är läcker.',
          image: 'https://cdn.shopify.com/s/files/1/0362/2465/products/headroom_headphone-silver_800x.jpg',
          amountInStock: 10,
          rating: 3
        },
        {
          title: 'En tv-skärm',
          ean: '123',
          price: 250,
          description: 'Jättebred. Den har kanaler.',
          image: 'https://icdn2.digitaltrends.com/image/compare-cinema-wide-tv-750x458.jpg',
          amountInStock: 10,
          rating: 5
        }
      ]
    }
  },
  methods: {
    addProduct (product) {
      this.$store.dispatch('addProduct', product)
    }
  }
}
</script>

<style>

</style>
