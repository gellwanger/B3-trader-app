import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Verifica se aparece a saudação ao usuário na tela principal", () => {  
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.click(screen.getByRole('button'));

    const greetings = screen.getByText('Hi, teste@teste.com!');
    expect(greetings).toBeInTheDocument();
  });

  test("Verifica se aparece o saldo inicial do usuário na tela principal", () => {  
    const balance = screen.getByText('Your balance is: $500');
    expect(balance).toBeInTheDocument();
  });

  test('Verifica se tem o botão de trade na tela principal', () => {  
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});
