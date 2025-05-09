describe('Flaky Test Example', () => {
  for (let i = 0; i < 10; i++) {
    it(`test iteration ${i + 1}`, () => {
      cy.visit('/mentor/123');
      cy.get('button').contains('Request Session').click();
      cy.get('input[name="date"]').type('2025-05-10');
      cy.get('select[name="time"]').select('10:00');
      cy.contains('Submit').click();
    });
  }
});
