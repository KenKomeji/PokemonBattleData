export const state = () => ({
  user: '',
  uid: '',
  isSignedIn: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setUid(state, uid) {
    state.uid = uid
  },
  setIsSignedIn(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  }
}

export const actions = {
  loginStat(context, { displayName: user, userId: uid }) {
    context.commit('setIsSignedIn', true)
    context.commit('setUser', user)
    context.commit('setUid', uid)
  },
  logoutStat(context) {
    context.commit('setIsSignedIn', false)
    context.commit('setUser', '')
    context.commit('setUid', '')
  }
}
export const getters = {
  getUser(state) {
    return state.user
  },
  getIsSignedIn(state) {
    return state.isSignedIn
  }
}
