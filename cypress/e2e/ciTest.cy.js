/// <reference types="cypress"/>

describe("Tests CI", () => {
    it("", () => {
        expect(true).to.be.true
        cy.exec("echo Sanskar, the world's greatest QA")
    })
})