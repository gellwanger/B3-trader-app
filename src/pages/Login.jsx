import React from 'react';
import login_image from '../images/login_image.jpg';
import Copyright from '../components/Copyrigth';

class Login extends React.Component {
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

    window.location.href='http://localhost:3000/main'
  }

  render() {
    const { buttonDisable, email, password } = this.state;

    return (
      <>
        <h1 className='challenge'>B3 Trader App</h1>
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
              {' '}
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
              {' '}
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
        </div>
          <a
            className="createLink"
            href="/create-new-account"
            data-testid="newUser"
          >
            New Here? Create new Account
          </a>
        <div>
        </div>
        <Copyright />
      </>
    );
  }
}

export default Login;
