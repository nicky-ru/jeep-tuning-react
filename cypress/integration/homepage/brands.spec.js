describe('Brands section', () => {
    before(() => {
        cy.visit('/')
    })
    it('should exist', function () {
        cy.get('#brands-section')
    });
    it('should contain title', function () {
        cy.contains('Марки, с которыми мы работаем')
    });
    it('should contain logos', function () {
        cy.get('#brands-section')
            .find('img')
            .its('length')
            .should('be.gt', 0)
    });
})