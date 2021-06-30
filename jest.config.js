const config = {
  setupFilesAfterEnv: ["<rootDir>client/src/setupTests.js"],
  testEnvironment: "jsdom",
  verbose: true,
  testURL: "http://localhost/",
};

module.exports = config;
