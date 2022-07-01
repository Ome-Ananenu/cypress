describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get(".gLFyf").type("Fathers day{enter}")

    cy.wait(2000)
    // cy.get(".MUFPAc > :nth-child(3) > a").click();
    cy.contains("Videos").click();
  })
})