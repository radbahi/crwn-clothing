import './Checkout.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart-selectors'
import cartItem from '../../components/cart-item/CartItem'

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        TEST CREDIT CARD
        <br />
        4242 4242 4242 4242 - expiry: 01/22 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
