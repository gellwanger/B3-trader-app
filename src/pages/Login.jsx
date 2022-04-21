import React from 'react';
import { Redirect } from 'react-router-dom';
import login_image from '../login_image.jpg';
import SmarttBot from '../SmarttBot.webp';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisable: true,
      email: '',
      password: '',
      redirect: false,
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
    && email.includes('.com')
    && password.length >= minimumLengthPassword) this.setState({ buttonDisable: false });
    else {
      this.setState({ buttonDisable: true });
    }
  }

  handleClick = () => {
		const { email } = this.state;
   
    localStorage.setItem('user', JSON.stringify({ email }));

    this.setState({ redirect: true });
  }

  render() {
    const { buttonDisable, email, password, redirect } = this.state;

    return (
      <>
        <h1 className='challenge'>Desafio Técnico Back-End Júnior</h1>
        <img 
          alt="SmarttBot" 
          className='SmarttBot_image'
          src={ SmarttBot } 
          width="200" 
        />
        <img 
          alt="login" 
          className='login_image'
          src={ login_image } 
          width="400" 
        />
        <div
          className="mainLogin"
        >
          <form 
            className='forms'
            onSubmit={ this.onInputChange }
          >
            <label
              htmlFor="email"
            >
              E-mail:
              <input
                type="email"
                id="email"
                name="email"
                onChange={ this.onInputChange }
                placeholder=" enter your email here"
                value={ email }
              />
            </label>
            <label
              htmlFor="password"
            >
              Password:
              <input
                type="password"
                id="password"
                name="password"
                onChange={ this.onInputChange }
                placeholder=" enter your password here"
                value={ password }
              />
            </label>
          </form>
          <button
            className={
              buttonDisable
                ? `bg-red-500 text-white font-bold py-2 px-4 border-b-4 
              border-red-700 rounded cursor-not-allowed`
                : `bg-green-500 hover:bg-green-400 text-white font-bold 
              py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded
              animate-pulse`
            }
            disabled={ buttonDisable }
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
          { redirect && <Redirect to="/home" />}
        </div>
      </>
    );
  }
}

export default Login;
