export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    console.log(userId);
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    // console.log(state.lastFetch);
    // console.log(currentTimeStamp);
    // console.log((currentTimeStamp - lastFetch));
    // console.log((currentTimeStamp - lastFetch) / 1000 > 60);
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
