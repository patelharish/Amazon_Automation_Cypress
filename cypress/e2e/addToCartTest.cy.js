/// <reference types="cypress" />

describe('Direct Add To Cart Product Test ', () => {

    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.url.visitURL();
    });

    it('Verify Add To Cart from pdp', () => {
        cy.add_cart.addToCart_plp();
    });
})