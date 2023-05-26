describe('Sparkbox homepage', () => {
  it('can submit newsletter signup', () => {
    cy.visit('https://sparkbox.com');

    cy.get('#mce-EMAIL').type('example@gmail.com');

    cy.get('#mc-embedded-subscribe-form').submit();
  });
});
