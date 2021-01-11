// Utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15162502#questions
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
