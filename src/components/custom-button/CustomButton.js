import styled, { css } from 'styled-components' //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15186270#notes

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const InvertedButtonStyles = css`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`

const GoogleSignInStyles = css`
  &.google-sign-in {
    background-color: #4285f4;
    color: white;
    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles
  }

  return props.inverted ? InvertedButtonStyles : ButtonStyles
}

const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
}

export default CustomButton
