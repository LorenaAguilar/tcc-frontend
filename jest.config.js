module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
  },
  coverageDirectory: 'reports',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/**/*.styles.ts',
    '!src/reportWebVitals.ts',
    '!src/**/*.d.ts',
    '!src/themes/*.js',
    '!src/constants.ts',
    '!src/assets/*.tsx',
    '!src/assets/*.svg',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      lines: 95,
      functions: 95,
      statements: 95,
    },
  },
};
