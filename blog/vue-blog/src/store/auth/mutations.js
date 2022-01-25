export default {
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
  },
  authorName(state, payload) {
    state.authorName = payload
  },
  storeAccountData(state, payload) {
    state.signupData.push(payload);
    console.log(payload);
  },
}
