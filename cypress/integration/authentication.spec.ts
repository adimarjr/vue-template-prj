// https://docs.cypress.io/api/introduction/api.html

describe('My Vue app Test', () => {
  describe('basic flow', () => {
    it('visits the app root url and login', () => {
      cy.visit('/')
      cy.contains('h1', 'Welcome to Vue')

      cy.get('#emailInput')
        .click()
        .type('user@new.com')
      cy.get('.btn-primary').click()

      cy.contains('Vue Test App')
      cy.contains('This is a sample page')
      cy.contains('user@new.com')
    })

    it('access the dashboard', () => {
      cy.visit('/')
      cy.contains('h1', 'Welcome to Vue')

      cy.get('#emailInput')
        .click()
        .type('user@new.com')
      cy.get('.btn-primary').click()

      cy.get('a').contains('Dashboard').click()
      cy.contains('This is a dashboard page')
    })
    
    it('logout', () => {
      cy.visit('/')
      cy.contains('h1', 'Welcome to Vue')

      cy.get('#emailInput')
        .click()
        .type('user@new.com')
      cy.get('.btn-primary').click()

      cy.get('a').contains('Logout').click()
      cy.contains('Welcome to Vue')
    })
  })
})
