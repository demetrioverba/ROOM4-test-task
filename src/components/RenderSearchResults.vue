<template>
  <ul>
    <RenderSearchResult
      v-for="(result, i) of results"
      v-bind:resultItem="result"
      v-bind:index="i"
      v-bind:key="i"
    />
  </ul>
</template>

<script>
import RenderSearchResult from "./RenderSearchResult";

export default {
  props: {
    results: {},
  },
  components: {
    RenderSearchResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0px;
}
</style>