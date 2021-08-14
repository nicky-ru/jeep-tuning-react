describe('The Home Page', () => {
    before(() => {
        cy.visit('/')
    })
    it.skip('successfully loads', () => {
        cy.visit('/')
    })
    it('should have all sections loaded', function () {
        cy.get("#advantages-section")
        cy.get("#brands-section")
        cy.get("#contacts-section")
        cy.get("#footer")
    });
    describe("Services accordion", () => {
        it('should upload uzels', function () {
            cy.get(".chakra-accordion").within(() => {
                cy.contains("button", "Выпускная система")
                cy.contains("button", "Трансмиссия")
                cy.contains("button", "Ремонт рулевого управления")
                cy.contains("button", "Тормозная система")
                cy.contains("button", "Двигатель")
                cy.contains("button", "Ремонт задней подвески")
                cy.contains("button", "Ремонт передней подвески")
                cy.contains("button", "Техническое обслуживание")
            })
        });
        it('should show uploaded services on button toggle', function () {
            cy.get("#accordion-button-6").click();
            cy.get("#services-accordion").contains("a", "Замена гофры глушителя (сварочные)")
            cy.get("#accordion-button-6").click();
        });
        it.skip('should open search services page', function () {
            cy.contains("button", "Все услуги").click();
            cy.url()
                .should("contain", "/serviceSearch")
        });
        it.skip('should open make appointment page', function () {
            cy.get("#accordion-button-6").click();
            cy.contains("button", "Записаться").click();
            cy.url({timeout: 10000})
                .should("contain", "/appointment");
            cy.visit("/")
        });
        it.skip('should open service info page', function () {
            cy.get("#accordion-button-6").click();
            cy.contains("a", "Замена гофры глушителя (сварочные)").click();
            cy.url({timeout: 10000})
                .should("contain", "/service")
            cy.visit("/")
        });
        it.only('should hide on small devices', function () {
            cy.get("#services-accordion").within(() => {
                cy.get("button:first").click()
                cy.contains("button", "Записаться").should("be.visible");
            })
            cy.viewport(375, 667);
            cy.get("#services-accordion").within(() => {
                cy.get("button:first").click()
                cy.contains("button", "Записаться").should("not.be.visible");
            })
            cy.viewport(1000, 660);
        });
    })

    describe("Advantages section", () => {
        it('should upload advantages', function () {
            cy.contains("Вечная история Вашего авто");
        });
    })

    describe("Brands section", () => {
        it('should upload brand images', function () {
            cy.get("#brands-section").within(() => {
                cy.get("img:first").should("have.attr", "alt", "Suzuki");
                cy.get("img:last").should("have.attr", "alt", "Mitsubishi");
            })
        });
    })
});