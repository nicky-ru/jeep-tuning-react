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
        cy.viewport(375, 667);
        cy.get("header").contains("h1", "JeepService").should("not.be.visible");
        cy.get("header").contains("a", "+79108210003").should("not.be.visible");
    });
});

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
    xit('should open a modal', function () {
        cy.get("#jumbotron").within(() => {
            cy.contains("button", "Найти услугу и записаться").click();
        })
        cy.get('#chakra-modal--body-10').should("be.visible")
    });
});

describe("Services accordion", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    xit('should upload uzels', function () {
        cy.get(".chakra-accordion").within(() => {
            cy.contains("button", "Выпускная система").should("be.visible");
            cy.contains("button", "Трансмиссия").should("be.visible");
            cy.contains("button", "Ремонт рулевого управления").should("be.visible");
            cy.contains("button", "Тормозная система").should("be.visible");
            cy.contains("button", "Двигатель").should("be.visible");
            cy.contains("button", "Ремонт задней подвески").should("be.visible");
            cy.contains("button", "Ремонт передней подвески").should("be.visible");
            cy.contains("button", "Техническое обслуживание").should("be.visible");
        })
    });
    xit('should upload services', function () {
        cy.get("#accordion-button-6").click();
        cy.get("#services-accordion").contains("a", "Замена гофры глушителя (сварочные)")
    });
    xit('should open search services page', function () {
        cy.contains("button", "Все услуги").click();
        cy.url()
            .should("contain", "/serviceSearch")
    });
    xit('should open make appointment page', function () {
        cy.get("#accordion-button-6").click();
        cy.contains("button", "Записаться").click();
        cy.url({timeout: 10000})
            .should("contain", "/appointment");
    });
    xit('should open service info page', function () {
        cy.get("#accordion-button-6").click();
        cy.contains("a", "Замена гофры глушителя (сварочные)").click();
        cy.url({timeout: 10000})
            .should("contain", "/service")
    });
    xit('should hide on small devices', function () {
        cy.get("#services-accordion").within(() => {
            cy.get("button:first").click()
            cy.contains("button", "Записаться").should("be.visible");
        })
        cy.viewport(375, 667);
        cy.get("#services-accordion").within(() => {
            cy.get("button:first").click()
            cy.contains("button", "Записаться").should("not.be.visible");
        })
    });
})

describe("Advantages section", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    xit('should upload advantages', function () {
        cy.contains("Вечная история Вашего авто");
    });
})

describe("Brands section", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    xit('should upload brand images', function () {
        cy.get("#brands-section").within(() => {
            cy.get("img:first").should("have.attr", "alt", "Suzuki");
            cy.get("img:last").should("have.attr", "alt", "Mitsubishi");
        })
    });
})