<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>тут должен быть список песен</p>
    <RenderItems :tracks="tracksTop" />
    {{ this.$store.state.array }}
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
