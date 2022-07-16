import React from 'react';
import CreateNewAccount from '../pages/CreateNewAccount';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  const setup = () => render(<CreateNewAccount />);

  test("Verifica se tem o texto 'e-mail' na tela inicial", () => {
    setup();
    const email = screen.getByText('E-mail:');
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

describe('Testa a funcionalidade da página', () => {
  const setup = () => render(<CreateNewAccount />);

  test("Verifica criar usuário com os dados corretos", () => {
    setup();

    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345678');
    
    const allowButton = screen.getByRole('button');

    expect(allowButton).toBeEnabled();
  });

  test("Verifica fazer login com o email incorreto", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345678');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com ambas senhas incorretas", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com a senha incorreta", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '123456');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com a confirmação da senha incorreta", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '123456');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
