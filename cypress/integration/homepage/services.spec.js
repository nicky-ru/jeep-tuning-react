describe('Service section', () => {
    before(() => {
        cy.visit('/')
    })
    beforeEach(() => {
        cy.get('#services-accordion').as('services')
    })
    it('should exist', function () {
        cy.get('@services')
    });
    context('Accordion', () => {
        beforeEach(() => {
            cy.get('@services').within(() => {
                cy.get('.chakra-accordion').as('accordion')
            })
        })
        it('should exist', () => {
            cy.get('@accordion')
        })
        it('should contain uzel names', () => {
            cy.get('@accordion').within(() => {
                cy.get('h2')
            })
        })
        it('should contain service names', () => {
            cy.get('@accordion').within(() => {
                cy.get('button:first').click()
                cy.get('.chakra-accordion__panel').within(() => {
                    cy.get('a')
                })
                cy.get('button:first').click()
            })
        })
        it('should open appointment page on button click', function () {
            cy.get('@accordion').find('button:first').click()
            cy.get('.chakra-accordion__panel').within(() => {
                cy.contains('button:first', 'Записаться').click()
            });
            cy.url({timeout: 10000})
                .should('contain', 'appointment')
            cy.contains('JeepService').click()
            cy.wait(6000)
        });
    })
    context('All services button', () => {
        it('should exist', function () {
            cy.get('@services').within(() => {
                cy.contains('button', 'Все услуги')
            })
        });
        it('should open all services page', () => {
            cy.get('@services').within(() => {
                cy.contains('button', 'Все услуги')
                    .click()
            })

            cy.url({timeout: 10000})
                .should("contain", "/serviceSearch")

            cy.contains('На главную').click()
        })
    })
})