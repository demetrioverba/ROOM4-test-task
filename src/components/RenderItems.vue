<template>
  <div>
    <p>bla bla</p>
    <!-- {{ tracks }} -->
    <ul>
      <RenderItem
        v-for="(track, i) of tracks"
        v-bind:trackItem="track"
        v-bind:index="i"
        v-bind:key="i"
      />
    </ul>
  </div>
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
  margin: 0;
  padding: 0;
}
</style>