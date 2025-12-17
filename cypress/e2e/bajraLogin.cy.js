/// <reference types="cypress"/>

describe("Bajra Login flow", () => {
    context("User is on the browser with internet enabled.", () => {
        it("Logs into bajra webstie", () => {
            cy.visit("web/login")
            cy.get("#login").should("not.be.visible").type(Cypress.env("email"))
            cy.get("#password").should("be.visible").type(Cypress.env("password"))
            cy.get("#wrapwrap > main > div > form > div.clearfix.oe_login_buttons.text-center.mb-1.pt-3 > button").click()
        })
    })
})
