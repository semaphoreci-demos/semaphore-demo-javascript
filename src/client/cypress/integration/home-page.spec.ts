/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('cy.get() - query DOM elements', () => {
    cy.get('h1').should('contain', 'Home');
  });
});
