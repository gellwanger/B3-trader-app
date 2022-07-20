import React, { Component } from 'react';

import Button from '../components/Button';
import Copyright from '../components/Copyrigth';
import Input from '../components/Input';

import login_image from '../images/login_image.jpg';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      buttonDisable: true,
      email: '',
      password: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.enableButton);
  }

  enableButton = () => {
    const { email, password } = this.state;
    const minimumLength = 6;
    const minimumLengthPassword = 6;

    if (email.length >= minimumLength && email.includes('@')
      && email.includes('mail')
      && email.includes('.com')
      && password.length >= minimumLengthPassword) this.setState({ buttonDisable: false });
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
        <h1 className='challenge'>B3 Trader App</h1>
        <img
          alt="login"
          className='login_image'
          src={login_image}
          width="400"
        />
        <div
          className="mainLogin"
        >
          <Input
            textLabel='E-mail:'
            idLabel='email'
            nameInput='email'
            placeholderInput="enter your email here"
            handleInputChange={this.onInputChange}
            typeInput='email'
            classInput='inputLogin'
          />
          <Input
            textLabel='Password:'
            idLabel='password'
            nameInput='password'
            placeholderInput="enter your password here"
            handleInputChange={this.onInputChange}
            typeInput='password'
            classInput='inputLogin'
          />
          </div>
          <div className='butonLogin'>
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
            Entrar
          </Button>
        </div>
        <a
          className="createLink"
          href="/create-new-account"
          data-testid="newUser"
        >
          New Here? Create new account
        </a>
        <div>
        </div>
        <Copyright />
      </>
    );
  }
}

export default Login;
