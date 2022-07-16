import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

// describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
//   const setup = () => render(<Login />);

//   test("Verifica se tem o texto 'e-mail' na tela inicial", () => {
//     setup();
//     const email = screen.getByText('e-mail', {exact: false});
//     expect(email).toBeInTheDocument();
//   });
  
//   test("Verifica se tem o texto 'password' na tela inicial", () => {
//     setup();
//     const password = screen.getByText('password', {exact: false});
//     expect(password).toBeInTheDocument();
//   });

//   test("Verifica se tem o placeholder 'enter your email here' na tela inicial", () => {
//     setup();
//     const emailPlaceholder = screen.getByPlaceholderText('enter your email here');
//     expect(emailPlaceholder).toBeInTheDocument();
//   });

//   test("Verifica se tem o placeholder 'enter your password here' na tela inicial", () => {
//     setup();
//     const passwordPlaceholder = screen.getByPlaceholderText('enter your password here');
//     expect(passwordPlaceholder).toBeInTheDocument();
//   });

//   test('Verifica se tem o botão de login na tela inicial', () => {
//     setup();
//     const button = screen.getAllByRole('button')
//     expect(button).toHaveLength(1);
//   });
// });

describe('Testa a funcionalidade da página', () => {
  const setup = () => render(<Login />);

  test("Verifica fazer login com os dados corretos", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@gmail.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    const allowButton = screen.getByRole('button');

    expect(allowButton).toBeEnabled();
  });

  test("Verifica fazer login com o email incorreto", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    const allowButton = screen.getByRole('button');

    expect(allowButton).toBeDisabled();
  });

  test("Verifica fazer login com a senha incorreta", () => {
    setup();
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345');
    const allowButton = screen.getByRole('button');

    expect(allowButton  ).toBeDisabled();
  });
});
