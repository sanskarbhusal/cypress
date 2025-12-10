describe('Navigation and DOM manipulation.', () => {

  context("User opens the browser.", () => {

    it.only("Opens website, navigates and enters email", () => {
      // Checks if the website is accessible.
      cy.visit("https://example.cypress.io")

      // Clicks on the link 'type'.
      cy.contains("type").click()

      // Verifies the user is redirected to 'command/actions'.
      cy.url().should("include", "/commands/actions")

      // Types email into the [Email] input field.
      cy.get(".action-email").type("mail@sanskarbhusal.com.np")

      // Verifies that the email is typed.
      cy.get(".action-email").should("have.value", "mail@sanskarbhusal.com.np")
    })
  })

  context("User Opens the browser", () => {
    it("Opens youtube", () => {
      cy.visit("https://youtube.com")
    })
  })
})