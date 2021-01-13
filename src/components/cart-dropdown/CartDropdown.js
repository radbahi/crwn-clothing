import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
