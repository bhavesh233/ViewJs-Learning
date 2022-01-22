export default {
  async login(_context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4rRzOT7blJFvm_L0A4TVunbcwgA18F8k",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = response.json();
    console.log(responseData);
    
    if (!response.ok) {
      const error = new Error("Failed to authenticate. Check your Login data.");
      throw error;
    }
  },
};
