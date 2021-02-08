<template>
  <ul>
    <RenderItem
      v-for="(track, i) of tracks"
      v-bind:trackItem="track"
      v-bind:index="i"
      v-bind:key="i"
    />
  </ul>
</template>

<script>
import RenderItem from "../components/RenderItem";

export default {
  props: {
    tracks: {},
  },
  components: {
    RenderItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>