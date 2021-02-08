<template>
  <div id="container" class="tagContainer">
    <a :href="tag.url">{{ tag.name }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoKeyLocal: "",
    };
  },
  props: {
    tag: {},
    index: {},
  },
  methods: {},
};
</script>
<style scoped>
.tagContainer {
  /* text-decoration: none; */
  box-sizing: border-box;
  display: inline-block;
  width: 80px;
  margin: 5px;
  background-color: #5b6466;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: white;
}
</style>