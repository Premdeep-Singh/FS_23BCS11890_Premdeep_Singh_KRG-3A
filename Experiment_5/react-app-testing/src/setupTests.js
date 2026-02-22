import "@testing-library/jest-dom";

"jest": {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  "transform": {
    "^.+\\.[tj]sx?$": "babel-jest"
  }
}
