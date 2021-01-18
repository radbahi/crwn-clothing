import { createSelector } from 'reselect'
import memoize from 'lodash.memoize' //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/20796198#questions

const COLLECTIONS_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

const selectShop = (state) => state.shop

//get all collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

//find single collection
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTIONS_ID_MAP[collectionUrlParam]
    )
  )
)
