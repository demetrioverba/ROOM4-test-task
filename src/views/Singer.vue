<template>
  <div class="aboutContainer">
    <router-link class="navButton" to="/">TOP tracks</router-link>
    <router-link class="navButton" to="/searchSong">Search song</router-link>
    <h1>{{ this.$store.state.artistName }}</h1>
    <img size="medium" :src="ArtistImage" alt="" />
    <router-link to="/"><div v-if="!infoAdded">BACK TO TOP</div></router-link>
    <p class="content">{{ ArtistInfo }}</p>
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
  width: 80%;
  margin: 0px auto;
  padding-bottom: 20px;
}
.content {
  overflow: hidden;
  color: #eaeaea;
}
.navButton {
  display: inline-block;
  height: 30px;
  width: 100px;
  background-color: #6d678eb6;
  text-align: center;
  justify-content: center;
  padding: 5px;
  border-radius: 0px 0px 10px 10px;
  margin: 5px;
  margin-top: 0px;
  text-decoration: none;
  color: white;
}
h1 {
  color: #eaeaea;
}
p {
  color: #474a4b;
}
</style>