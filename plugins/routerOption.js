import firebase from '@/plugins/firebase.js'

export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    const pageName = to.name
    // const firebase = require('firebase/app')
    require('firebase/auth')
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        store.dispatch('userInfo/logoutStat')
        switch (pageName) {
          case 'index':
            break
          default:
            break
        }
      } else {
        store.dispatch('userInfo/loginStat', {
          displayName: user.displayName,
          userId: user.uid,
        })
      }
    })
  })
}
