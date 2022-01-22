export default {
  async signup(context, data) {
    const storeData = {
      fullName: data.fullName,
      email: data.email,
      username: data.username,
      password: data.password,
    };
    const storedServer = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    };

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4rRzOT7blJFvm_L0A4TVunbcwgA18F8k",
      {
        method: "POST",
        body: JSON.stringify(storedServer),
      }
    );
    if (!response.ok) {
      const error = new Error(
        "Failed to authenticate. Check your SingupData data."
      );
      throw error;
    }
    context.commit("storeAccountData", storeData);
  },
};
