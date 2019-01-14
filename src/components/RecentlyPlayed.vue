<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex xs6>
          <v-card color="blue-gray" class="white--text">
            <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
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

    }
  },

  components: {
    Suggestions
  }
}
</script>

