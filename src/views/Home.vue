<template>
  <div>
    <RecentlyPlayed />
    <Suggestions />
  </div>
</template>

<script>
import RecentlyPlayed from '../components/RecentlyPlayed'
import Suggestions from '../components/Suggestions'

  export default {
    components: {
      RecentlyPlayed,
      Suggestions
    }
  }
</script>
