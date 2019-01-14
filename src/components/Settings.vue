<template>
  <v-fab-transition>
    <v-btn
      v-model="fab"
      color="#1DB954"
      dark
      fab
      fixed
      bottom
      right
    >
      <v-icon>menu</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data(){
    return {
      fab: false
    }
  }
}
</script>
