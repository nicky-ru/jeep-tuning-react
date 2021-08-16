describe('Service Info page', () => {
    before(() => {
        cy.visit('/service/4db00b8d-3ef0-4768-aafd-6e46a5c84515')
    })
    context('BreadCrumb', () => {
        it('should have to homepage link', function () {
            cy.contains('.chakra-breadcrumb', 'Главная')
        });
        it.only('should have to all services link', function () {
            cy.contains('.chakra-breadcrumb', 'Все услуги')
        });
    })
})