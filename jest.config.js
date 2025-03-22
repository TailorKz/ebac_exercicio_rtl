module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', 
      '^.+\\.(js|jsx)$': 'babel-jest', 
      '^.+\\.css$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./setupTests.js'],
  };
  