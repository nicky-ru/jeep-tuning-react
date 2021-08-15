describe('Info box', () => {
    before(() => {
        cy.visit('/service/4db00b8d-3ef0-4768-aafd-6e46a5c84515')
    })
    it('should contain service name', function () {
        cy.contains('Замена ступичных подшипников')
    });
    it('should contain uzel name', () => {
        cy.contains('.chakra-badge', 'Трансмиссия')
    })
    context('Description tabs', () => {
        context('Tablist', () => {
            beforeEach(() => {
                cy.get('.chakra-tabs__tablist').as('tablist')
            })
            it('should have active what tab', () => {
                cy.get('@tablist').within(() => {
                    cy.contains('Что?')
                        .should('have.attr', 'aria-selected', 'true')
                })
            })
            it('should have clickable why tab', () => {
                cy.get('@tablist').within(() => {
                    cy.contains('Зачем?')
                        .click()
                        .should('have.attr', 'aria-selected', 'true')
                })
            })
            it('should have clickable how tab', () => {
                cy.get('@tablist').within(() => {
                    cy.contains('Как?')
                        .click()
                        .should('have.attr', 'aria-selected', 'true')
                })
            })
        })
        context('Tabs', () => {
            beforeEach(() => {
                cy.get('.chakra-tabs').as('tabs')
                cy.get('.chakra-tabs__tablist').as('tablist')
            })
            it('should contain what description', function () {
                cy.get('@tablist').within(() => {
                    cy.contains('Что?').click()
                })

                cy.get('@tabs').within(() => {
                    cy.contains('Все хорошо знают')
                        .should('be.visible')
                })
            });
            it('should contain why description', () => {
                cy.get('@tablist').within(() => {
                    cy.contains('Зачем?').click()
                })

                cy.get('@tabs').within(() => {
                    cy.contains('Первым признаком')
                        .should('be.visible')
                })
            })
            it('should contain how description', () => {
                cy.get('@tablist').within(() => {
                    cy.contains('Как?').click()
                })

                cy.get('@tabs').within(() => {
                    cy.contains('Вывешивается автомобиль')
                        .should('be.visible')
                })
            })
        })

    })
    context('Price', () => {
        it('should exist', function () {
            cy.contains('Цена')
        });
        it('should contain first price', function () {
            cy.contains('.chakra-badge', '200 руб.')
        });
        it('should contain second price', function () {
            cy.contains('.chakra-badge', '300 руб.')
        });
        it('should contain third price', function () {
            cy.contains('.chakra-badge', '500 руб.')
        });
    })
})