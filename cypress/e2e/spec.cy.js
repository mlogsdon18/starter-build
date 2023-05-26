describe('Sparkbox homepage', () => {
  it('can submit newsletter signup', () => {
    cy.visit('https://sparkbox.sparkboxqa.com/');

    cy.get('#mce-EMAIL').type('example@gmail.com');

    cy.get('#mc-embedded-subscribe-form').submit();
  });

  it('finds foundry article and navigates to it', () => {
    cy.visit('https://sparkbox.sparkboxqa.com/');

    cy.contains('Foundry').click();

    cy.get('input[placeholder="Search the Foundry"]').type('eleventy');

    cy.get('[data-content="Search"]').click();

    cy.get('.cmp-listing__category').should('have.text', 'eleventy');

  });
});
