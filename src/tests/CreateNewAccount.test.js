import React from 'react';
import CreateNewAccount from '../pages/CreateNewAccount';

import { render, screen } from '@testing-library/react';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  const setup = () => render(<CreateNewAccount />);

  test("Verifica se tem o texto 'email  ' na tela inicial", () => {
    setup();
    const email = screen.getByText('Email:');
    expect(email).toBeInTheDocument();
  });
  
  test("Verifica se tem o texto 'password' na tela inicial", () => {
    setup();
    const password = screen.getByText('Password:');
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

  test("Verifica se tem o placeholder 'confirm your password' na tela inicial", () => {
    setup();
    const passwordPlaceholder = screen.getByPlaceholderText('confirm your password');
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test('Verifica se tem o botão de criar usuário na página', () => {
    setup();
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});
