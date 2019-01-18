<template>
  <v-flex xs6>
    <v-card>
      <v-toolbar color="#1DB954" dark>
        <v-toolbar-title class="text-xs-center">Related</v-toolbar-title>
      </v-toolbar>

      <v-list subheader>
        <v-subheader>Check out these suggested tracks!</v-subheader>
        <v-list-tile
          v-for="track in tracks"
          :key="track.id"
          avatar
        >
          <v-list-tile-avatar>
            <img :src="track.images.url">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="track.name"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>play_circle_filled</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data(){
    return {
      tracks: [],

    }
  },
  computed: {
    searchAlbums(){
      
    let spotifyApi = new SpotifyWebApi();
    spotifyApi
      .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
      .then(
        function(data) {
          console.log('Album information', data.body);
        },
        function(err) {
          console.error(err);
        }
      );
    }
  }
}
</script>

