describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })

  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
      .contains('type')
      .click()
      .url().should('include', '/commands/actions')
      .get('.action-email').type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

})
