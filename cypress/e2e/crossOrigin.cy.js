/// <reference types="cypress"/>

describe("Testing cross origin visit", () => {
    it("", () => {
        cy.visit("https://www.google.com").url().should("include", "google")
        cy.visit("https://cypress.io").url().should("include", "cypress")
    })
})


