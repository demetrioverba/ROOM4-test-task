<template>
  <li class="itemContainer">
    <div id="infoContainer" class="infoContainer">
      <div class="info">
        <h1 class="song">{{ resultItem.name }}</h1>
        <h3 class="artist">{{ resultItem.artist }}</h3>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    resultItem: {},
    index: {},
  },
  methods: {},
};
</script>

<style scoped>
.itemContainer {
  box-sizing: border-box;
  height: auto;
  margin: 40px 0px;
}
.infoContainer {
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  margin: 0px auto;
  padding: 10px;
  background-color: #eaeaea;
  box-shadow: 4px 4px 10px 0.2px grey;
}
.info {
  flex: 60%;
  padding-left: 10px;
}
.song {
  font-size: 50px;
  list-style-type: none;
  font-weight: normal;
  margin: 0px;
  margin-bottom: 10px;
  color: #6d678e;
}
.artist {
  margin: 0px;
  text-transform: uppercase;
  font-weight: normal;
  color: #6d678e;
}
</style>
