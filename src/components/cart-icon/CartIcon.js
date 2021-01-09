import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon />
    <span className='item-count'>0</span>
  </div>
)

export default CartIcon
