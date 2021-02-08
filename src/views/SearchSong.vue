<template>
  <div class="search">
    <router-link class="homeButton" to="/">TOP tracks</router-link>
    <form @submit.prevent="getResults()">
      <input
        type="text"
        v-model="searchValue"
        placeholder="I Believe In Love"
      />
      <button type="submit">search</button>
    </form>
    <RenderSearchResults :results="searchResults" />
  </div>
</template>

<script>
import RenderSearchResults from "../components/RenderSearchResults";

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters.getSearchResults;
    },
  },
  methods: {
    getResults() {
      this.$store.state.searchValue = this.searchValue;
      this.$store.dispatch("loadResults");
      this.searchValue = "";
    },
  },
  components: {
    RenderSearchResults,
  },
};
</script>
<style scoped>
.homeButton {
  display: inline-block;
  height: 30px;
  width: 100px;
  background-color: #6d678eb6;
  text-align: center;
  padding: 5px;
  border-radius: 0px 0px 10px 10px;
  margin: 5px;
  margin-top: 0px;
  margin-left: 20px;
  text-decoration: none;
  color: white;
}
.search {
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
}
form {
  margin: 0px auto;
  margin-top: 50px;
  display: flex;
  width: 93%;
}
input {
  flex: 80%;
  height: 30px;
  padding-left: 10px;
  border-radius: 7px 0px 0px 7px;
  border: none;
  background: #eaeaea;
  color: #59537a;
}
button {
  flex: 20%;
  height: 32px;
  border-radius: 0px 7px 7px 0px;
  border: none;
  font-size: 20px;
  background: #f6b5cc;
  color: #59537a;
}
input:focus {
  outline: none;
}
button:focus {
  outline: none;
}
</style>