//www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15177240#overview
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  //we do priceForStripe because Stripe works entirely with cents
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IDuXYDHu4PYmUryBWaDO2pIk1o3vX3ZxoqqptuiZCIBbAQ3ENRpwK2kUS9xYnarf7nsFQMwNbcKdDEgBdnze2AX00M62FksW1'
  const onToken = (token) => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <div>
      {/* //https://github.com/azmenak/react-stripe-checkout */}
      <StripeCheckout
        label='Pay now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeButton
