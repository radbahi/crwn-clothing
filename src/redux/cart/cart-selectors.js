//www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15163032#questions
//https://github.com/reduxjs/reselect a library for memoizing state to prevent unnecessary component rerenders
//https://react-redux.js.org/api/hooks#using-memoizing-selectors using redux hooks like useDispatch with memoization
import { createSelector } from 'reselect'
import cartItem from '../../components/cart-item/CartItem'

//function gets entire state and returns just part of it
const selectCart = (state) => state.cart

//uses createSelector and return the value we want. this is the actual part that memoizes. this is used in CartDropdown.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

// this selector now returns the count instead of the mapStateToProps we originally had in CartIcon component
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)
