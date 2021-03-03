import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles'

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15190698#questions
const WithSpinner = (WrappedComponent) => {
  const Spinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
