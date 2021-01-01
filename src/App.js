import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shop.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
