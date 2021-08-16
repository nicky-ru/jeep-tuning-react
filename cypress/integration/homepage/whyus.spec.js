describe('Advantages section', () => {
    before(() => {
        cy.visit('/')
    })
    it('should exist', function () {
        cy.get('#advantages-section')
    });
    it('should have title', function () {
        cy.contains('Почему выбирают нас')
    });
    it('should contain 9 advantages', () => {
        cy.get('#advantages-section').within(() => {
            cy.get('.chakra-wrap__list li').should('have.length', '9')
        })
    })
})