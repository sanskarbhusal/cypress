import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "https://bajratechnologies.com",
    setupNodeEvents(on, config) {
      on("task", {
        seed(db) {
          return new Promise((resolve) => {
            // seeding logic
            console.log("Seeded")
            resolve("DB Seeded")
          })
        },
        resetDB() {
          return new Promise((resolve, reject) => {
            // reset logic
            console.log("reset")
            resolve("DB Reset Done")
          })
        }
      })
    },
  },
});
