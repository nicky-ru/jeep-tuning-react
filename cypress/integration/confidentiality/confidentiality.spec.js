describe('Confidentiality policy', () => {
    it('should exist', function () {
        cy.visit('/confidentiality');
        cy.contains('h1', 'Политика в отношении обработки персональных данных');
    });
})