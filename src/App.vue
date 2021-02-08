<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("loadTop");
  },
};
</script>
<style>
#app {
  width: 100%;
  background-image: linear-gradient(to top left, #6d678e, #f6b5cc);
  border-radius: 10px;
}
</style>
