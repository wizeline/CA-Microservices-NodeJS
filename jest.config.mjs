/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  collectCoverageFrom: ['app/**/*.js', '!app/**/index.js'],
  setupFiles: ['<rootDir>/test/setEnvVars.js'],
  testResultsProcessor: 'jest-sonar-reporter',
};

export default config;
