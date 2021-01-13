import { Switch, Route, Redirect } from 'react-router-dom'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
import './App.css'
import HomePage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shop.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp'
import Header from './components/header/Header'

class App extends Component {
  // set up an unsubscribe to prevent memory leaks when app component unmounts
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // the user parameter below is the user auth state of firebase which we then set to our app state on mount. also provides session persistence
    // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15082482#questions
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        //remember that snapshot is the method that gets us the actual data of the document. snapshot.data() gives us the fields we made ourselves
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        // keeps currentUser on null if signed out
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

// you can also use useSelector which is easier
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

// you can also use useDispatch which is easier
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
