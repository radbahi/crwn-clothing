import { Switch, Route } from 'react-router-dom'
import { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import HomePage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shop.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp'
import Header from './components/header/Header'

class App extends Component {
  state = { currentUser: null }

  // set up an unsubscribe to prevent memory leaks when app component unmounts
  unsubscribeFromAuth = null

  componentDidMount() {
    // the user parameter below is the user auth state of firebase which we then set to our app state on mount. also provides session persistence
    // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15082482#questions
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        //remember that snapshot is the method that gets us the actual data of the document. snapshot.data() gives us the fields we made ourselves
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        // keeps currentUser on null if signed out
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
