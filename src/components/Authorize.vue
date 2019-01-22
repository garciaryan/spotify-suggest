<template>
  <v-layout row justify-center>
    <v-btn color="#1DB954" large :href=url>Log in with Spotify</v-btn>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  
  data(){
    return {
      url: this.$store.state.authUrl
    }
  },

  //no async code in computed props i.e no axios.post
  computed: {
    accessToken(){
      if (this.$store.state.loggedIn === true){
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
      } else {
        console.log('not logged in');
      }
    },
    logInCode(){
      return this.$store.state.code = window.location.href.split('code=')[1];
    }
  }
}
</script>

