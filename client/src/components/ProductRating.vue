<template>
  <div>
    <v-icon v-for="star in rating" :key="star" color="amber lighten-1">star</v-icon>
  </div>
</template>

<script>
export default {
  props: ['rating']
}
</script>

<style>
</style>
