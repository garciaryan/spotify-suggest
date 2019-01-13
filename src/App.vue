<template>
  <v-app dark>
    <v-toolbar app>
      <v-img :src="require('./assets/Spotify_Logo_RGB_Green.png')" height="45" max-width="120" contain />
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Suggest</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <SideNav />
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SideNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
