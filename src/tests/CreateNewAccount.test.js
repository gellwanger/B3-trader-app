import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateNewAccount from '../pages/CreateNewAccount';
import Home from '../pages/Home';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  beforeEach(() => {
    render(<CreateNewAccount />);
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
    const emailPlaceholder = screen.getByPlaceholderText(' enter your email here');
    expect(emailPlaceholder).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'enter your password here' na tela inicial", () => {  
    const passwordPlaceholder = screen.getByPlaceholderText(' enter your password here');
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'confirm your password here' na tela inicial", () => {  
    const passwordPlaceholder = screen.getByPlaceholderText(' confirm your password');
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test('Verifica se tem o botão de criar usuário na página', () => {  
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});

describe('Testa a funcionalidade da página', () => {
  beforeEach(() => {
    render(<CreateNewAccount />);
  });

  test("Verifica criar usuário com os dados corretos", () => { 
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345678');
    userEvent.click(screen.getByRole('button'));

    const greeting = screen.getByText('Hi, teste@teste.com!');
    expect(greeting).toBeInTheDocument();
  });

  test("Verifica fazer login com o email incorreto", () => { 
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345678');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com ambas senhas incorretas", () => { 
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com a senha incorreta", () => { 
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '123456');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("Verifica fazer login com a confirmação da senha incorreta", () => { 
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '123456');
    userEvent.type(screen.getByPlaceholderText('confirm your password'), '12345');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
