module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec).+(ts|tsx)"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-styled-components",
  ],
}
