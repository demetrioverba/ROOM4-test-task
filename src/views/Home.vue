<template>
  <div class="home">
    <router-link to="/searchSong">Search song</router-link>
    <h2>Top Tracks Last.fm</h2>
    <RenderItems :tracks="tracksTop" />
  </div>
</template>

<script>
import RenderItems from "../components/RenderItems";

export default {
  name: "Home",
  computed: {
    tracksTop() {
      return this.$store.getters.getTopTracks;
    },
  },
  components: {
    RenderItems,
  },
  methods: {},
};
</script>
