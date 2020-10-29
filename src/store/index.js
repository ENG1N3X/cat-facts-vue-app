import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: []
  },
  actions: {
    async getData({commit}) {
      try {
        let response = await fetch("https://cat-fact.herokuapp.com/facts/random?amount=12");
        response = await response.json();
        console.log("Fetching..", response)
        commit("SET_DATA", response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  getters: {
    data: (state) => state.data
  }
});
