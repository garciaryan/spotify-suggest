<template>
  <v-layout row justify-center @click='accessToken'>
    <v-btn color="#1DB954" large :href=url>Log in with Spotify</v-btn>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  
  data(){
    return {
      url: this.$store.state.authUrl,
      code: window.location.href.split('code=')[1]
    }
  },

  methods: {
    accessToken(){
      let clientId = process.env.VUE_APP_CLIENT_ID,
        code = this.code,
        secret = process.env.VUE_APP_CLIENT_SECRET;

      axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http:/localhost:8080/callback',
        client_id: clientId, 
        client_secret: secret 
      }, {withCredentials: true}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

