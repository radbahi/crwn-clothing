import { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './SignIn.scss'

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  //by dynamically setting our values below, we can use handleChange anywhere
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    )
  }
}
