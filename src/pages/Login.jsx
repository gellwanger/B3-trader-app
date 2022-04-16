import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
      <div
        className="mainLogin"
      >
        <form onSubmit={ this.onInputChange }>
          <label
            htmlFor="email"
          >
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              onChange={ this.onInputChange }
              placeholder="insira seu e-mail aqui"
              value={ email }
            />
          </label>
          <label
            htmlFor="password"
          >
            Senha:
            <input
              type="password"
              id="password"
              name="password"
              onChange={ this.onInputChange }
              placeholder="insira sua senha aqui"
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
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

export default Login;
