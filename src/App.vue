<template>
  <v-app dark>
    <v-toolbar app>
      <v-img :src="require('./assets/Spotify_Logo_RGB_Green.png')" height="45" max-width="120" contain />
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Suggest</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <RecentlyPlayed />
    </v-content>
  </v-app>
</template>

<script>
// import SideNav from './components/SideNav'
import RecentlyPlayed from './components/RecentlyPlayed'
// import Suggestions from './components/Suggestions'

export default {
  name: 'App',
  components: {
    //SideNav,
    RecentlyPlayed,
    //Suggestions
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
