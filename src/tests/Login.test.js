import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test("Verifica se tem o texto 'e-mail' na tela inicial", () => {  
    const email = screen.getByText('e-mail', {exact: false});
    expect(email).toBeInTheDocument();
  });
  
  test("Verifica se tem o texto 'password' na tela inicial", () => {  
    const password = screen.getByText('password', {exact: false});
    expect(password).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'enter your email here' na tela inicial", () => {  
    const emailPlaceholder = screen.getByPlaceholderText('enter your email here');
    expect(emailPlaceholder).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'enter your password here' na tela inicial", () => {  
    const passwordPlaceholder = screen.getByPlaceholderText('enter your password here');
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test('Verifica se tem o botão de login na tela inicial', () => {  
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});
