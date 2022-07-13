import React from 'react';
import { Redirect } from 'react-router-dom';
import userIcon from '../images/userIcon.png';
import Copyright from '../components/Copyrigth';

class CreateNewAccount extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisable: true,
      email: '',
      password: '',
      confirmedPassword: '',
      redirect: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.enableButton);
  }

  enableButton = () => {
    const { email, password, confirmedPassword } = this.state;
    const minimumLength = 6;
    const minimumLengthPassword = 6;

    if (email.length >= minimumLength && email.includes('@')
    && email.includes('.com')
    && password.length >= minimumLengthPassword
    && password === confirmedPassword) this.setState({ buttonDisable: false });
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
    const { buttonDisable, redirect } = this.state;

    return (
      <>
        <h1 className='new_user'>Create New User</h1>
        <img 
          alt="login" 
          className='new_user_icon'
          src={ userIcon } 
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
              {' '}
              <input
                type="email"
                id="email"
                name="email"
                onChange={ this.onInputChange }
                placeholder=" enter your email here"
              />
            </label>
            <label
              htmlFor="password"
            >
              Password:
              {' '}
              <input
                type="password"
                id="password"
                name="password"
                onChange={ this.onInputChange }
                placeholder=" enter your password here"
              />
            </label>
            <label
              htmlFor="confirmedPassword"
            >
              Confirm password:
              {' '}
              <input
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                onChange={ this.onInputChange }
                placeholder="confirm your password"
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
            Create
          </button>
          { redirect && <Redirect to="/main" />}
        </div>
        <Copyright />
      </>
    );
  }
}

export default CreateNewAccount;
