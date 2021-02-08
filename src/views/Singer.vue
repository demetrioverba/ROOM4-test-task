<template>
  <div class="aboutContainer">
    <router-link to="/">TOP tracks</router-link> |
    <router-link to="/searchSong">Search song</router-link>
    <h1>{{ this.$store.state.artistName }}</h1>

    <img size="medium" :src="ArtistImage" alt="" />
    <router-link to="/"><div v-if="!infoAdded">BACK TO TOP</div></router-link>
    <p>{{ ArtistInfo }}</p>
    <RenderTags
      v-for="(tag, i) of ArtistTags"
      v-bind:tag="tag"
      v-bind:index="i"
      v-bind:key="i"
    />
  </div>
</template>

<script>
import RenderTags from "../components/RenderTags";
export default {
  data() {
    return {
      singerName: this.$route.params.artist,
      testArray: ["fges", "rega", "ragreg", "aergv"],
      infoAdded: true,
    };
  },
  computed: {
    ArtistInfo() {
      return this.$store.getters.getArtistInfo;
    },
    ArtistTags() {
      return this.$store.getters.getArtistTags;
    },
    ArtistImage() {
      return this.$store.getters.getArtistImage;
    },
  },
  methods: {},
  components: {
    RenderTags,
  },
  created() {
    if (this.singerName) {
      this.$store.state.artistName = this.singerName;
    } else {
      this.infoAdded = false;
    }

    this.$store.dispatch("loadArtist");
  },
};
</script>
<style scoped>
.aboutContainer {
  width: 90%;
  margin: 0px auto;
  /* background-color: teal; */
}
</style>