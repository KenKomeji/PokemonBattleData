import firebase from 'firebase'

// .env に設定した値を取得してる
const config = {
  apiKey: 'AIzaSyBYAQFTIzSqg7jQfjsWHG9Ikxf6O41vruQ',
  authDomain: 'pokemon-aba1a.firebaseapp.com',
  databaseURL: 'https://pokemon-aba1a.firebaseio.com',
  projectId: 'pokemon-aba1a',
  storageBucket: 'pokemon-aba1a.appspot.com',
  messagingSenderId: '910291865843',
  appId: '1:910291865843:web:f94e537c265b0d64da2786',
  measurementId: 'G-4JJPL54172',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
