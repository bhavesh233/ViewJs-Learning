import { createStore } from "vuex";

const store = createStore({
  state() {
    return { isLoading: null };
  },
  mutations: {
    isLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {},
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
});

export default store;
