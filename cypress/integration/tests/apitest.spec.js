/// <reference types="Cypress"/>

describe('Zippopotam API', () => {
    it('check the status code 200 for request US zipcode', () => {
        cy.request('us/90210').its('status').should('be.equal', 200)
    })
})