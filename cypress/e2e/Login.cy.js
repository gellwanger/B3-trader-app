describe('Check user login', () => {  
  const rightEmail = 'teste@gmail.com';
  const rightPassword = 123456;

  const wrongEmail = 'teste@teste.com';
  const wrongPassword = 12345;

  const greetings = 'Hi, Teste!';

  it('Checks if user can login with right data', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name=email]').type(rightEmail);
    cy.get('input[name=password]').type(rightPassword);
    cy.get('button').click();
    cy.contains(greetings);
  })

  it('Checks if user can`t login with wrong email', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name=email]').type(wrongEmail);
    cy.get('input[name=password]').type(rightPassword);
    cy.get('button').click();
    cy.contains('B3 Trader App').should('be.visible');
  })

  it('Checks if user can`t login with wrong password', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name=email]').type(rightEmail);
    cy.get('input[name=password]').type(wrongPassword);
    cy.get('button').click();    cy.get('button').click();
    cy.contains('B3 Trader App').should('be.visible');
  })
});