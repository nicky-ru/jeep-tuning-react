describe("The header", () => {
    before(() => {
        cy.visit("/")
    })
    it('should contain brand logo', function () {
        cy.contains("h1", "JeepService").should("be.visible")
    });
    it('should contain phone link', function () {
        cy.contains("a", "+79108210003").should("be.visible");
    });
    it('should contain menu button', function () {
        cy.get("#menu-button-3");
    });
    it('should contain email button', function () {
        cy.get("header").within(() => {
            cy.contains("button", "Email");
        })
    });
    it('should contain phone button', function () {
        cy.get("header").within(() => {
            cy.contains("button", "Позвонить");
        })
    });
    it('should contain color mode button', function () {
        cy.get("header").within(() => {
            cy.get("button:last").should("have.attr", "aria-label", "Toggle Color Mode");
        })
    });
    context("responsiveness md", () => {
        beforeEach(() => {
            cy.viewport(768, 1024)
        })
        it('should show brand logo', function () {
            cy.contains("h1", "JeepService").should("be.visible");
        });
        it('should show phone link', function () {
            cy.contains("a", "+79108210003").should("be.visible");
        });
        it('should hide menu button', function () {
            cy.get("#menu-button-3").should("not.be.visible");
        });
    })
    context("responsiveness sm", () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
        it('should hide brand logo', function () {
            cy.contains("h1", "JeepService").should("not.be.visible");
        });
        it('should hide phone link', function () {
            cy.contains("a", "+79108210003").should("not.be.visible");
        });
        it('should show menu button', function () {
            cy.get("#menu-button-3").should("be.visible");
        });
    })
    context("menu button", () => {
        beforeEach(() => {
            cy.viewport(375, 667)
        })
        it('should toggle menu list', function () {
            cy.get("#menu-button-3").click();
            cy.get("#menu-button-3").click();
        });
    })
})