describe('Request Mentoring Session', () => {
  it('allows mentee to request session from mentor', () => {
    cy.visit('/mentor/123');
    cy.get('button').contains('Request Session').click();
    cy.get('input[name="date"]').type('2025-05-10');
    cy.get('select[name="time"]').select('10:00');
    cy.contains('Submit').click();
    cy.contains('Request sent').should('be.visible');
  });
});
