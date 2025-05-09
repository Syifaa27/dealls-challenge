describe('Search Mentor', () => {
  it('allows mentee to search mentors by keyword', () => {
    cy.visit('/mentors');
    cy.get('input[placeholder="Search mentors"]').type('Product');
    cy.contains('Search').click();
    cy.contains('Product Manager').should('exist');
  });
});
