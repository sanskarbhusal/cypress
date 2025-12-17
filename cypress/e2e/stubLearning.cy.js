/// <reference types="cypress"/>

describe("", () => {
    it("", () => {
        const obj = {
            foo: (a) => {
                return a
            }
        }
        cy.stub(obj, "foo").withArgs("poo").returns("boo")
        console.log(n.foo("poo"))
    })
})