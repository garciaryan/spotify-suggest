<template>
  <v-app dark>
    <v-toolbar app>
      <v-img :src="require('./assets/Spotify_Logo_RGB_Green.png')" height="45" max-width="120" contain />
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Suggest</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <RecentlyPlayed />
      <Settings />
    </v-content>
  </v-app>
</template>

<script>
import RecentlyPlayed from './components/RecentlyPlayed'
import Settings from './components/Settings'
import SpotifyWebApi from 'spotify-web-api-node';

export default {
  name: 'App',
  components: {
    RecentlyPlayed,
    Settings
  },
  data () {
    return {

    }
  },
  created(){
    let scopes = ['user-read-private', 'user-read-email'],
      redirectUri = 'https://example.com/callback',
      clientId = process.env.VUE_APP_CLIENT_ID,
      state = '';

    // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
    let spotifyApi = new SpotifyWebApi({
      redirectUri: redirectUri,
      clientId: clientId
    });

    // Create the authorization URL
    let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
  }
}
</script>
