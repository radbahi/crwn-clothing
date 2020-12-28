import { Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage.js'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  )
}

export default App
