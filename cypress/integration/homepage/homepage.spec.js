describe('The Home Page', () => {
    before(() => {
        cy.visit('/')
    })
    it.skip('should open make appointment page', function () {
        cy.get("#accordion-button-6").click();
        cy.contains("button", "Записаться").click();
        cy.url({timeout: 10000})
            .should("contain", "/appointment");
        cy.visit("/")
    });
});