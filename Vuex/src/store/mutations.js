export default {
  // increment(stateA) {
  //   stateA.counter += 2;
  // },
  // increase(state, payload) {
  //   console.log(state); //it gives proxy
  //   state.counter = state.counter + payload.value;
  // },
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
