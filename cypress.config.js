import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://bajratechnologies.com",
    setupNodeEvents(on, config) {
      on("task", {
        seed(db) {
          return new Promise((reject, resolve) => {
            // seeding logic
          })
        }
      })
    }
  },
  retries: {
    openMode: 0,
    runMode: 0
  },
});
