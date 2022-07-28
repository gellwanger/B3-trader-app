import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  const setup = () => render(<Login />);

  test("Verifica se tem o texto 'email' na tela inicial", () => {
    setup();
    const email = screen.getByText('email', {exact: false});
    expect(email).toBeInTheDocument();
  });
  
  test("Verifica se tem o texto 'password' na tela inicial", () => {
    setup();
    const password = screen.getByText('password', {exact: false});
    expect(password).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'enter your email here' na tela inicial", () => {
    setup();
    const emailPlaceholder = screen.getByPlaceholderText('enter your email here');
    expect(emailPlaceholder).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'enter your password here' na tela inicial", () => {
    setup();
    const passwordPlaceholder = screen.getByPlaceholderText('enter your password here');
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test('Verifica se tem o botão de login na tela inicial', () => {
    setup();
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});
