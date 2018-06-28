describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://archvillaingames.com')

      cy.get('.newsbox').click()
    })
  })