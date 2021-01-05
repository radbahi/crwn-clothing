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

//remember that api requests are async so we make below an async func
//takes authenticated users and makes them into a document in firestore
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15083436#questions 5:08 for query explanation
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  //assign user to userRef variable
  const userRef = firestore.doc(`/users/${userAuth.uid}`)

  //get info from that userRef
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    //make that document using properties pulled from userAuth
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      throw new Error('error creating user', error.message)
    }
  }
  return userRef
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
