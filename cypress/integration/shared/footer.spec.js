describe('Footer', () => {
    before(() => {
        cy.visit('/')
    })
    context('Social links', () => {
        it('should exist', function () {
            cy.get('#footer')
                .find('a')
                .its('length')
                .should('be.at.least', 4)
        });
    })
    it.only('should contain confidentiality page link', function () {
        cy.get('#footer').within(() => {
            cy.contains('a', 'Политика конфиденциальности')
                .should('have.attr', 'href', '/confidentiality')
        })
    });
})