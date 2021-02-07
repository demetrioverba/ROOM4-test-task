import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    topTracks: [],
    array: [1, 2, 3]
  },
  getters: {
    getTopTracks(state) {
      return state.topTracks
    }
  },
  mutations: {
    SET_TOPTRACKS(state, tracks) {
      state.topTracks = tracks.tracks.track;
    }
  },
  actions: {
    async loadTop() {

      let loadTop = await fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&limit=10&tag=disco&api_key=30a7826d6145cd51910f5ff14c6cabff&format=json")
        .then((response) => { return response.json() })
        .then((data) => { return data })

      this.commit('SET_TOPTRACKS', loadTop)


    },
  },
  modules: {
  }
})
