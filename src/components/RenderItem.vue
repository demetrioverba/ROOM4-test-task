<template>
  <li class="itemContainer">
    <div id="infoContainer" class="infoContainer">
      <div class="imgContainer">
        <img
          style="width: 100%; height: 100%"
          :src="trackItem.image[2]['#text']"
        />
      </div>
      <div class="info">
        <router-link
          class="routerLink"
          :to="{
            name: 'Singer',
            params: { id: index, artist: trackItem.artist.name },
          }"
        >
          <h1 class="song">{{ trackItem.name }}</h1>
          <div class="singer">
            <h3 class="artist">{{ trackItem.artist.name }}</h3>
          </div>
        </router-link>
        <a class="artistLink" :href="trackItem.artist.url">{{
          trackItem.artist.name
        }}</a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  // data() {
  //   return {
  //     infoKeyLocal: "",
  //   };
  // },
  props: {
    trackItem: {},
    index: {},
  },
  methods: {},
};
</script>

<style scoped>
.itemContainer {
  box-sizing: border-box;
  height: 220px;
  margin: 40px 0px;
}
.imgContainer {
  flex: 20%;
  background-color: #5b6466;
  margin-right: 10px;
}
.info {
  flex: 60%;
  position: relative;
}
.artistLink {
  position: absolute;
  bottom: 2px;
  color: #eef3d2;
}
.routerLink {
  text-decoration: none;
  color: #eef3d2;
}

.infoContainer {
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  background-color: #9c9fa0;
}
.song {
  font-size: 50px;
  list-style-type: none;
  font-weight: normal;
  margin: 0px;
  margin-bottom: 10px;
}
.artist {
  margin: 0px;
  text-transform: uppercase;
  font-weight: normal;
}
</style>
