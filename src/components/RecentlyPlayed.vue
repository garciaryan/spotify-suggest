<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex xs6>
          <v-card color="blue-gray" class="white--text">
            <v-card-title>
              <v-flex>
                <v-text-field
                  label="Songs/Artists"
                  dark
                  color="#1DB954"
                ></v-text-field>
              </v-flex>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark @click="getRecentTracks">Search</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <Suggestions />
      </v-layout>
    </v-container>
  </v-card>
  
</template>

<script>
import Suggestions from '@/components/Suggestions'

export default {
  data(){
    return {
      search: ''
    }
  },

  methods: {
    getRecentTracks(){
    }
  },

  components: {
    Suggestions
  }
}
</script>

