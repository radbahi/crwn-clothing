import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // this is our localStorage in our browser
import userReducer from './user/user-reducers'
import cartReducer from './cart/cart-reducers'

// whitelist contains any reducers we want to store
// since user is being persisted by firebase, all we need is cart
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
