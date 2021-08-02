describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    xit('successfully loads', () => {
        cy.visit('/')
    })
    xit('should have all sections loaded', function () {
        cy.get("header").should("be.visible");
        cy.get("#jumbotron").should("be.visible");
        cy.get("#services-accordion").should("be.visible");
        cy.get("#advantages-section").should("be.visible");
        cy.get("#brands-section").should("be.visible");
        cy.get("#contacts-section").should("be.visible");
        cy.get("#footer").should("be.visible");
    });
    xit('should hide on large devices', function () {
        cy.get("#menu-button-3").should("not.be.visible");
    });
    xit('should hide on small devices', function () {
        cy.get("header").contains("h1", "JeepService").should("be.visible");
        cy.get("header").contains("a", "+79108210003").should("be.visible");
        cy.get("#services-accordion").within(() => {
            cy.get("button:first").click()
            cy.contains("button", "Записаться").should("be.visible");
        })
        cy.viewport(375, 667);
        cy.get("header").contains("h1", "JeepService").should("not.be.visible");
        cy.get("header").contains("a", "+79108210003").should("not.be.visible");
        cy.get("#services-accordion").within(() => {
            cy.get("button:first").click()
            cy.contains("button", "Записаться").should("not.be.visible");
        })
    });
})

describe("Jumbotron", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    xit('should have all elements uploaded', function () {
        cy.get("#jumbotron").within(() => {
            cy.get("img").should("be.visible");
            cy.contains("Лучший сервис внедорожников и кроссоверов").should("be.visible");
            cy.contains("Какая услуга вас интересует?").should("be.visible");
            cy.contains("button", "Найти услугу и записаться").should("be.visible");
        })
    });
    xit('should be able to open a modal', function () {
        cy.get("#jumbotron").within(() => {
            cy.contains("button", "Найти услугу и записаться").click();
        })
        cy.get('#chakra-modal--body-10').should("be.visible")
    });
})