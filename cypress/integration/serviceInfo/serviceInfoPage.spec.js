describe('Service Info page', () => {
    before(() => {
        cy.visit('/service/be5e127d-6446-48fd-b1dd-3df6e21985ad')
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