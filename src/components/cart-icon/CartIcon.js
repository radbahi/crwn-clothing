import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { connect } from 'react-redux'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

// below is a selector. adds up items.
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
