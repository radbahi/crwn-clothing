import SHOP_DATA from './shop-data'

const INITIAL_STATE = {
  collections: SHOP_DATA,
}

//since no modifications, only return default
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
