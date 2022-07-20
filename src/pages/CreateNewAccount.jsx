import React, { Component } from "react";

import Button from '../components/Button';
import Copyright from '../components/Copyrigth';
import Input from '../components/Input';

import userIcon from '../images/userIcon.png';

class CreateNewAccount extends Component {
  constructor() {
    super();

    this.state = {
      buttonDisable: true,
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.enableButton);
  }

  enableButton = () => {
    const { email, password, confirmPassword } = this.state;
    const minimumLength = 6;
    const minimumLengthPassword = 6;

    if (email.length >= minimumLength && email.includes('@')
      && email.includes('mail')
      && email.includes('.com')
      && password.length >= minimumLengthPassword
      && password === confirmPassword) this.setState({ buttonDisable: false });
    else {
      this.setState({ buttonDisable: true });
    }
  }

  handleClick = () => {
    const { email } = this.state;
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = 'http://localhost:3000/main'
  }

  render() {
    const { buttonDisable } = this.state;

    return (
      <>
        <h1 className='new_user'>Create New User</h1>
        <img
          alt="login"
          className='new_user_icon'
          src={userIcon}
          width="400"
        />
        <div
          className="mainLogin"
        >
          <Input
            classInput='inputLogin'
            idLabel='email'
            nameInput='email'
            textLabel='Email:'
            placeholderInput='enter your email here'
            handleInputChange={this.onInputChange}
            typeInput='email'
          />
          <Input
            classInput='inputLogin'
            idLabel='password'
            textLabel='Password:'
            nameInput='password'
            placeholderInput='enter your password here'
            handleInputChange={this.onInputChange}
            typeInput='password'
          />
          <Input
            classInput='inputLogin'
            idLabel='confirmPassword'
            nameInput='confirmPassword'
            textLabel='Confirm password:'
            placeholderInput='confirm your password'
            handleInputChange={this.onInputChange}
            typeInput='password'
          />
          <Button
            classNameStyle={
              buttonDisable
                ? `bg-red-500 text-white font-bold py-2 px-4 border-b-4 
              border-red-700 rounded cursor-not-allowed`
                : `bg-green-500 hover:bg-green-400 text-white font-bold 
              py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded
              animate-pulse`
            }
            handleClick={this.handleClick}
            typeBtn='button'
          >
            Create
          </Button>
        </div>
        <Copyright />
      </>
    );
  }
}

export default CreateNewAccount;
