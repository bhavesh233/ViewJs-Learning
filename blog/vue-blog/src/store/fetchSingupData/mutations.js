export default {
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
  },
  authorName(state, payload) {
    state.authorName = payload
  },
}
