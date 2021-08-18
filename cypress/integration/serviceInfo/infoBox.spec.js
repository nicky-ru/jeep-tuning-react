describe('Info box', () => {
    context('there is no service description and prices', () => {
        const serviceName = 'замена масла раздатки';
        const uzelName = 'Техническое обслуживание';
        before(() => {
            cy.visit('/')
            cy.contains('button', uzelName).click()
            cy.contains('a', serviceName).click()
            cy.url({timeout: 10000}).should('contain', 'service')
        })
        it('should contain service name', function () {
            cy.contains(serviceName)
        });
        it('should contain uzel name', () => {
            cy.contains(uzelName)
        })
        it('should have inWork tab', () => {
            cy.get('.chakra-tabs__tablist').within(() => {
                cy.contains('В работе')
                    .should('have.attr', 'aria-selected', 'true')
            })
        })
        it('should have description placeholder', () => {
            cy.get('.chakra-tabs').within(() => {
                cy.contains('Здесь будет описание данной услуги').should('be.visible')
            })
        })
    })
    context('service description and prices', () => {
        const serviceName = 'Замена томозных колодок барабанных';
        const uzelName = 'Тормозная система';
        before(() => {
            cy.visit('/')
            cy.contains('button', uzelName).click()
            cy.contains('a', serviceName).click()
            cy.url({timeout: 10000}).should('contain', 'service')
        })
        it('should contain service name', function () {
            cy.contains(serviceName)
        });
        it('should contain uzel name', () => {
            cy.contains(uzelName)
        })
        it('should have active what tab', () => {
            cy.get('.chakra-tabs__tablist').within(() => {
                cy.contains('Что?')
                    .should('have.attr', 'aria-selected', 'true')
            })
            cy.get('.chakra-tabs').within(() => {
                cy.contains('1')
                    .should('be.visible')
            })
        })
        it('should have clickable why tab', () => {
            cy.get('.chakra-tabs__tablist').within(() => {
                cy.contains('Зачем?')
                    .click()
                    .should('have.attr', 'aria-selected', 'true')
            })
            cy.get('.chakra-tabs').within(() => {
                cy.contains('2')
                    .should('be.visible')
            })
        })
        it('should have clickable how tab', () => {
            cy.get('.chakra-tabs__tablist').within(() => {
                cy.contains('Как?')
                    .click()
                    .should('have.attr', 'aria-selected', 'true')
            })
            cy.get('.chakra-tabs').within(() => {
                cy.contains('3')
                    .should('be.visible')
            })
        })
        it('should contain price', function () {
            cy.contains('.chakra-badge', '100 руб.')
            cy.contains('.chakra-badge', '200 руб.')
            cy.contains('.chakra-badge', '300 руб.')
        });
    })
})