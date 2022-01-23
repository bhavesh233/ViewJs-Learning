export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4rRzOT7blJFvm_L0A4TVunbcwgA18F8k',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      },
    )
    const responseData = await response.json()

    if (response.ok) {
      const realTimeDatabase = await fetch(
        'https://viu-blog-default-rtdb.firebaseio.com/data.json',
      )
        .then((realTimeDatabase) => {
          if (realTimeDatabase.ok) {
            return realTimeDatabase.json()
          }
        })
        .then((data) => {
          let fullName = ''
          for (const id in data) {
            fullName = data[id].fullName
          }
          context.commit('authorName', fullName)
        })
      console.log(realTimeDatabase)
      context.state.isLogin = true
    }

    if (!response.ok) {
      context.state.isLogin = false
      const error = new Error('Failed to authenticate. Check your Login data.')
      throw error
    }

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    })
  },

  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    context.state.isLogin = false
    context.commit('setUser', {
      token: null,
      userId: null,
    })
  },
}
