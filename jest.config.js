module.exports = {
  testEnvironment: 'jsdom',
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
};
