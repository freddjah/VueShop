<template>
  <v-app>
    <menubar />
    <v-container fluid>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Menubar from '@/components/Menubar'
export default {
  name: 'app',
  components: {
    Menubar
  }
}
</script>

<style>
</style>
