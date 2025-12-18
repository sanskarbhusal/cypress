# Instruction
**Step 1**: Clone the project

<ins>If you have SSH setup in gitlab run:</ins>

- ```git clone git@git.bajratechnologies.com:j-25-11/J-25-11-QA/sanskar-bhusal/cypress.git```

<ins>Or if you prefer credential based authentication run</ins>

- ``` git clone https://git.bajratechnologies.com/j-25-11/J-25-11-QA/sanskar-bhusal/cypress.git ```

**Step 2**: Run following command to install necessary packages.
- ``` npm install```
<br>

**Step 3**: Run following command to open cypress in GUI mode.

- ```npm run cy:open```

<ins> Or if you need to run cypress in headless mode (without spawning a browser)</ins>

 - ```npx cypress run --spec cypress/e2e/spec.cy.js```

