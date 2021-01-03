// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15037584#questions
// all firebase imports below needed to...
import firebase from 'firebase/app' //...initialize firebase
import 'firebase/firestore' //...use firebase database
import 'firebase/auth' //...use firebase authentication

// below object pulled from firebase project website
const config = {
  apiKey: 'AIzaSyCrsDKvBlvW4SrRoQ__U2PqFmYJXAuE5_k',
  authDomain: 'crwn-clothing-db-c47f0.firebaseapp.com',
  projectId: 'crwn-clothing-db-c47f0',
  storageBucket: 'crwn-clothing-db-c47f0.appspot.com',
  messagingSenderId: '1086701248644',
  appId: '1:1086701248644:web:9b31db4c509db24837e2d1',
  measurementId: 'G-LME7SLJP8X',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// gives us access to google auth provider class from the auth library imported above
const provider = new firebase.auth.GoogleAuthProvider()

// will always trigger google popup whenever google auth is used for auth and signin
provider.setCustomParameters({ prompt: 'select_account' })

// set a function to do as stated above with provider.setCustomParameters
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
