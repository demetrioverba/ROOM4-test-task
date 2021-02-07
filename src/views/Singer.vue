<template>
  <div class="about">
    <router-link to="/">TOP tracks</router-link> |
    <h1>This is a singer page</h1>
    {{ singerName }}
    {{ singerInformation }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      singerInformation: this.$store.state.topTracks[this.$route.params.id],
      singerName: this.$route.params.artist,
    };
  },
};
</script>