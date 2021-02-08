import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    topTracks: [],
    artistInfo: [],
    artistName: "",
    artistTags: [],
    artistImage: "",
    searchResults: [],
    searchValue: ""
  },
  getters: {
    getTopTracks(state) {
      return state.topTracks
    },
    getArtistInfo(state) {
      return state.artistInfo
    },
    getArtistTags(state) {
      return state.artistTags
    },
    getArtistImage(state) {
      return state.artistImage
    },
    getSearchResults(state) {
      return state.searchResults
    }
  },
  mutations: {
    SET_TOPTRACKS(state, tracks) {
      state.topTracks = tracks.tracks.track;
    },
    SET_ARTIST(state, artist) {
      state.artistInfo = artist.artist.bio.summary;
      state.artistTags = artist.artist.tags.tag;
      state.artistImage = artist.artist.image[2]['#text'];
    },
    SET_RESULTS(state, results) {
      state.searchResults = results.results.trackmatches.track;

    },

  },
  actions: {
    async loadTop() {

      let loadTop = await fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&limit=10&tag=disco&api_key=30a7826d6145cd51910f5ff14c6cabff&format=json")
        .then((response) => { return response.json() })
        .then((data) => { return data })

      this.commit('SET_TOPTRACKS', loadTop)


    },
    async loadArtist() {
      let artist = this.state.artistName;
      let loadArtist = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=30a7826d6145cd51910f5ff14c6cabff&format=json`)
        .then((response) => { return response.json() })
        .then((data) => { return data })

      this.commit('SET_ARTIST', loadArtist)


    },
    async loadResults() {
      let searchValue = this.state.searchValue;
      let loadResults = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&limit=10&track=${searchValue}&api_key=30a7826d6145cd51910f5ff14c6cabff&format=json`)
        .then((response) => { return response.json() })
        .then((data) => { return data })

      this.commit('SET_RESULTS', loadResults)


    },

  },
  modules: {
  }
})
