import { createSelector } from 'reselect'
import memoize from 'lodash.memoize' //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/20796198#questions

const selectShop = (state) => state.shop

//get all collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

//made this to translate data object into array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
) // check if collections is null or not in state

//find single collection
//we converted data to object and assigned keys instead of using array so this selector is updated accordingly. data normalization.
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15176016#questions
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)

//we double bang below to return true for selector and pass into shop's map state to props
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
)
