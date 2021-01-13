import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
