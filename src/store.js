import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count++;
    },
    decrement(state, payload) {
      state.count--;
    }
  },
  actions: {
    addNumber({ commit }, payload) {
      commit("counter");
    }
  }
});
