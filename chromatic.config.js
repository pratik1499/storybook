module.exports = {
  buildScriptName: "build-storybook",
  exitZeroOnChanges: true, // Optional: Exit with 0 even if there are changes
  skip: process.env.CI !== "true", // Optional: Skip Chromatic on local development
};
