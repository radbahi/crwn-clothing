import { createSelector } from 'reselect'
import memoize from 'lodash.memoize' //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/20796198#questions

const selectShop = (state) => state.shop

//get all collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

//find single collection
//we converted data to object and assigned keys instead of using array so this selector is updated accordingly. data normalization.
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15176016#questions
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
)
