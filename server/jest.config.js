module.exports = {
  transform: {
    ".(js|ts)": "ts-jest",
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.ts", "!src/index.ts"],
};
