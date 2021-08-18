describe('Confidentiality policy', () => {
    it('should exist', function () {
        cy.visit('/privacyPolicy');
        cy.contains('h1', 'Политика в отношении обработки персональных данных');
    });
})