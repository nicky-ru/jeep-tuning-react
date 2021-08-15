describe('Info box', () => {
    before(() => {
        cy.visit('/service/4db00b8d-3ef0-4768-aafd-6e46a5c84515')
    })
    it('should have service name', function () {
        cy.contains('Замена Ступичных Подшипников')
    });
    it('should have uzel name', () => {
        cy.contains('ТРАНСМИССИЯ')
    })
    it('should have description', () => {
        cy.contains('Все хорошо знают')
    })
    it('should contain price', function () {
        cy.contains('цена')
    });
})