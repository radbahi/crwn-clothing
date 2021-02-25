// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15037584#questions
// all firebase imports below needed to...
import firebase from 'firebase/app' //...initialize firebase
import 'firebase/firestore' //...use firebase database
import 'firebase/auth' //...use firebase authentication

//MUST ADD DOMAIN TO AUTHENTICATION IN FIREBASE DASHBOARD IF PROJECT IS DEPLOYED ONLINE

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

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15189164#notes
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch() //batches everything to be saved to the database into one object
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc() //get new docref in this collection and generate new ID
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#questions/11444182
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    // we use encodeURI to make sure any special characters are usable in a hyperlink
    return {
      routeName: encodeURI(title.toLowerCase()),
      ID: doc.id,
      title,
      items,
    }
  })
  console.log(transformedCollection)
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
