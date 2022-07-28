describe('Check user trade action', () => {  
  const rightEmail = 'teste@gmail.com';
  const rightPassword = 123456;
  const righStock = 'PETR4';
  const rightQuantity = 10;
  const wrongStock = 'PETR5';
  const wrongQuantity = 101;

  it('Checks if user can trade with right data', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name=email]').type(rightEmail);
    cy.get('input[name=password]').type(rightPassword);
    cy.get('button').click();
    cy.get('input[name=stock]').type(righStock);
    cy.get('input[name=trade]').type(rightQuantity);
    cy.get('button').click();
    cy.contains('PETROBRAS').should('be.visible');
  })
});