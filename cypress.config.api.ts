import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    specPattern: 'cypress/e2e/api/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
