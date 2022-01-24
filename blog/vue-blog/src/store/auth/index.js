import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      signupData: [
        {
          fullName: "akshay",
          email: "akshay@prominentpixel.com",
          username: "ak",
          password: "123456",
        }, {
          fullName: "bhavesh",
          email: "bhavesh@prominentpixel.com",
          username: "bt",
          password: "1234567",
        },
      ],
      isLogin: false,
      authorName: "",
      email:""
    };
  },
  actions,
  getters,
  mutations,
};
