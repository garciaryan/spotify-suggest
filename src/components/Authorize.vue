<template>
  <v-layout row justify-center>
    <v-btn color="#1DB954" large :href=url>Log in with Spotify</v-btn>
  </v-layout>
</template>

<script>
export default {
  
  data(){
    return {
      url: this.$store.state.authUrl
    }
  }
}
</script>

