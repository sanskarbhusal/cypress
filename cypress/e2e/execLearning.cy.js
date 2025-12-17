/// <reference types="cypress"/>

// describe("Runs a js script using npm", () => {
//     it("check if the script has output 'test' ", () => {
//         cy.exec("echo test").its("stdout").should("contain", "test")
//     })
// })

describe("", () => {
    it("", () => {
        cy.intercept("POST", "/comment" }).as("commentExample")
    cy.request("POST", "/comment", { foo: "foo" }).then((response) => {
        console.log(response)
        cy.exec(`echo ${JSON.stringify(response.body)} > cypress/fixtures/comments.json`)
        cy.fixture("comments.json").should("deep.eq", response.body)
    })
})
