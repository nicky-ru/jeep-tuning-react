describe("The header", () => {
    before(() => {
        cy.visit("/")
    })
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
    context("Brand name", () => {
        beforeEach(() => {
            cy.contains("h1", "JeepService").as("brandName")
        })
        it('should be visible on large devices', function () {
            cy.get("@brandName").should("be.visible")
        });
        it('should be visible on medium devices', function () {
            cy.viewport(768, 1024)
            cy.get("@brandName").should("be.visible");
        });
        it('should be hidden on small devices', function () {
            cy.viewport(375, 667)
            cy.get("@brandName").should("not.be.visible");
        });
    })
    context("Phone link", () => {
        beforeEach(() => {
            cy.contains("a", "+79108210003").as("phoneLink")
        })
        it('should be visible on large devices', function () {
            cy.get("@phoneLink").should("be.visible")
        });
        it('should be visible on medium devices', function () {
            cy.viewport(768, 1024)
            cy.get("@phoneLink").should("be.visible");
        });
        it('should be hidden on small devices', function () {
            cy.viewport(375, 667)
            cy.get("@phoneLink").should("not.be.visible");
        });
    })
    context("Menu button", () => {
        beforeEach(() => {
            cy.get("#menu-button-3").as("menuButton")
        })
        it('should be hidden on large devices', function () {
            cy.get("@menuButton").should("not.be.visible");;
        });
        it('should be hidden on medium devices', function () {
            cy.viewport(768, 1024)
            cy.get("@menuButton").should("not.be.visible");
        });
        it('should be visible on small devices', function () {
            cy.viewport(375, 667)
            cy.get("@menuButton").should("be.visible");
        });
        it('should toggle menu list', function () {
            cy.viewport(375, 667)
            cy.get("@menuButton").click();
            cy.get("@menuButton").click();
        });
    })
})