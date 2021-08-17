describe("Jumbotron", () => {
    before(() => {
        cy.visit("/");
    })
    beforeEach(() => {
        cy.get("#jumbotron").as("jumbotron")
    })
    it("should exist", () => {
        cy.get("@jumbotron");
    })
    it('should have background', () => {
        cy.get("@jumbotron").within(() => {
            cy.get("img").should("have.prop", "alt", "background")
        })
    });
    it("should have heading", () => {
        cy.get("@jumbotron").within(() => {
            cy.contains("Сервис внедорожников и кроссоверов c гарантией")
        })
    })
    it("should have appointment button", () => {
        cy.get("@jumbotron").within(() => {
            cy.contains("Какая услуга вас интересует?");
            cy.contains("button", "Найти услугу и записаться");
        })
    })
    describe("Appointment button", () => {
        beforeEach(() => {
            cy.get("@jumbotron").within(() => {
                cy.contains("button", "Найти услугу и записаться").as("appointmentButton");
            })
        })
        it('should toggle a modal', function () {
            cy.get("@appointmentButton").click();
            cy.get(".chakra-input");
            cy.get('.chakra-modal__content-container').click(0,0);
        });
    })
    describe("Modal", () => {
        beforeEach(() => {
            cy.get("@jumbotron").within(() => {
                cy.contains("button", "Найти услугу и записаться").click();
            })

        })
        afterEach(() => {
            cy.get('.chakra-modal__content-container').click(0,0);
        })
        it('focuces input on open', function () {
            cy.focused()
                .should('have.class', 'chakra-input')
        });
        it('accepts input', () => {
            const typedText = 'замена масла';
            cy.get('.chakra-input')
                .type(typedText)
                .should('have.value', typedText)
        })
        it('should search items', () => {
            const typedText = 'замена масла';
            cy.get('.chakra-input').type(typedText)
            cy.contains('.css-bvabkc', typedText)
        })
        it('should open service page on click', () => {
            const typedText = 'замена масла';
            cy.get('.chakra-input').type(typedText)
            cy.get('.css-bvabkc')
                .contains('a',typedText)
                .click()

            cy.url({timeout: 10000})
                .should('contain', '/service')
            cy.contains('h2', typedText)
            cy.contains("a", "Джипсервис в Ярославле").click()
            cy.get("@jumbotron").within(() => {
                cy.contains("button", "Найти услугу и записаться").click();
            })
        })
    })
})