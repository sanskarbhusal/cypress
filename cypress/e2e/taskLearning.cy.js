describe("", () => {
    beforeEach(() => {
        cy.task("seed")
    })

afterEach("",()=>{
    cy.task("resetDB")
})
    it("", () => {
        console.log("Test 1")
    })

    it("", () => {
        console.log("Test 2")
    })
})