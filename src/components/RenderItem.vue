<template>
  <li>
    <div id="container" class="infoCont">
      <div id="infoKey" class="infoKey">
        <router-link :to="{ name: 'Singer', params: { id: index, artist: trackItem.artist.name} }"
          >{{ index }}{{ trackItem.name
          }}{{ trackItem.artist.name }}</router-link
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      infoKeyLocal: "",
    };
  },
  props: {
    trackItem: {},
    index: {},
  },
  methods: {},
};
</script>
