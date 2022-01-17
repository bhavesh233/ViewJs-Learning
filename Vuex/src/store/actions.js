export default {
    // increment(context) {
    //   setTimeout(function () {
    //     context.commit('increment');
    //   }, 2000);
    // },
    // increase(context, payload) {
    //   // console.log(typeof context); it gives a object
    //   context.commit('increase', payload);
    // },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  }