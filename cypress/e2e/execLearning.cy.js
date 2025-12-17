/// <reference types="cypress"/>

describe("", () => {
    it("", () => {
        cy.intercept("POST", "/comment", "response string")
        cy.request({
            method: 'POST',
            url: '/comment',
            body: { comment: 'Congratulations' },
        }).then((response) => {
            console.log(response.body)
        })
    })
})
