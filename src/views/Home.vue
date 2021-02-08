<template>
  <div class="home">
    <router-link class="navButton" to="/searchSong">Search song</router-link>
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
<style scoped>
.navButton {
  display: block;
  height: 40px;
  background-image: linear-gradient(to bottom, #6d678e, transparent);
  text-align: center;
  padding-top: 15px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 60px;
  text-decoration: none;
  color: white;
  transition: background-color 1s;
}
.navButton:hover {
  background-color: #6d678e;
}

.home {
  padding-bottom: 20px;
}
</style>
