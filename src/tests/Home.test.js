import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa se todos os elementos pré-definidos estão renderizados na tela inicial', () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Verifica se aparece o input de escolher o ticker da ação na tela principal", () => {  
    userEvent.type(screen.getByPlaceholderText('enter your email here'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('enter your password here'), '12345678');
    userEvent.click(screen.getByRole('button'));

    const chooseStock = screen.getByText('Choose Stock to trade:');
    expect(chooseStock).toBeInTheDocument();
  });

  test('Verifica se aparece o input de escolher a quantidade de ações para trade na tela principal', () => {  
    const quantityStocks = screen.getByText('Type quantity of stocks:')
    expect(quantityStocks).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'PETR4, VALE3, ALUP11, ...' na tela inicial", () => {  
    const stockPlaceholder = screen.getByPlaceholderText('PETR4, VALE3, ALUP11, ...');
    expect(stockPlaceholder).toBeInTheDocument();
  });

  test("Verifica se tem o placeholder 'min: 1, max: 100' na tela inicial", () => {  
    const quantityPlaceholder = screen.getByPlaceholderText('min: 1, max: 100');
    expect(quantityPlaceholder).toBeInTheDocument();
  });

  test('Verifica se tem o botão de trade na tela principal', () => {  
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1);
  });
});
