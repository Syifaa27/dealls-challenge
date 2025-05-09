describe('Login as Mentee', () => {
  it('logs in using email and password', () => {
    cy.visit('https://dealls.com/sign-in?returnUrl=%2F');
    cy.get('input[name="email"]').type('mentee@example.com');
    cy.get('input[name="password"]').type('securepassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
