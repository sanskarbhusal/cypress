/// <reference types="cypress"/>
describe("", () => {
    it("", () => {
        cy.intercept("POST", "/comment", "string response").as("commentExample")
        cy.request("POST", "/comment", { foo: "foo" }).then((response) => {
        console.log(response)
        cy.exec(`echo ${JSON.stringify(response.body)} > cypress/fixtures/comments.json`)
        cy.fixture("comments.json").should("deep.eq", response.body)
    })
    })
})
