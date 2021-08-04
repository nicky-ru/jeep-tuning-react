describe("Header", () => {
    before(() => {
        cy.visit("/")
    })
    it('should exist', function () {
        cy.get("header");
    });
    describe("Menu button", () => {
        beforeEach(() => {
            cy.get("#menu-button-3").as("menuButton")
        })
        it('able to toggle menu list', function () {
            cy.viewport(375, 667)
            cy.get("@menuButton").click();
            cy.get("@menuButton").click();
        });
        context("On large devices", () => {
            it('should be hidden', function () {
                cy.get("@menuButton").should("not.be.visible");
            });
        })
        context("On medium devices", () => {
            it('should be hidden', function () {
                cy.viewport(768, 1024)
                cy.get("@menuButton").should("not.be.visible");
            });
        })
        context("On small devices", () => {
            it('should be visible', function () {
                cy.viewport(375, 667)
                cy.get("@menuButton").should("be.visible");
            });
        })
    })
    describe("Brand name", () => {
        beforeEach(() => {
            cy.contains("h1", "JeepService").as("brandName")
        })
        context("On large devices", () => {
            it('should be visible', function () {
                cy.get("@brandName").should("be.visible")
            });
        })
        context("On medium devices", () => {
            it('should be visible', function () {
                cy.viewport(768, 1024)
                cy.get("@brandName").should("be.visible");
            });
        })
        context("On small devices", () => {
            it('should be hidden', function () {
                cy.viewport(375, 667)
                cy.get("@brandName").should("not.be.visible");
            });
        })
    })
    describe("Email button", () => {
        it('should should exist', function () {
            cy.get("header").within(() => {
                cy.contains("button", "Email");
            })
        });
    })
    describe("Call button", () => {
        it('should exist', function () {
            cy.get("header").within(() => {
                cy.contains("button", "Позвонить");
            })
        });
    })
    describe("Phone link", () => {
        beforeEach(() => {
            const phoneNum = "+79108210003"
            cy.contains("a", phoneNum).as("phoneLink")
        })
        context("On large devices", () => {
            it('should be visible', function () {
                cy.get("@phoneLink").should("be.visible")
            });
        })
        context("On medium devices", () => {
            it('should be visible', function () {
                cy.viewport(768, 1024)
                cy.get("@phoneLink").should("be.visible");
            });
        })
        context("On small devices", () => {
            it('should be hidden', function () {
                cy.viewport(375, 667)
                cy.get("@phoneLink").should("not.be.visible");
            });
        })
    })
    describe("Color mode button", () => {
        it('should exist', function () {
            cy.get("header").within(() => {
                cy.get("button:last").should("have.attr", "aria-label", "Toggle Color Mode");
            })
        });
    })
})