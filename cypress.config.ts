export default {
  component: {
    numTestsKeptInMemory: 0,
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "cypress/component/**/*.cy.ts",
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'e2e-results/test-result-[hash].xml',
      includePending: true,
      attachments: true,
      outputs: true
    }
  }
};
