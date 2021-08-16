describe('Service Info page', () => {
    before(() => {
        cy.visit('/appointment?serviceId=0e34eb4f-1db5-43ec-b252-1fff142aa18f')
    })
    context('BreadCrumb', () => {
        it('should have to homepage link', function () {
            cy.contains('.chakra-breadcrumb', 'Главная')
        });
        it('should have to all services link', function () {
            cy.contains('.chakra-breadcrumb', 'Все услуги')
        });
        it('should have to service description link', function () {
            cy.contains('.chakra-breadcrumb', 'Описание услуги')
        });
    })
})