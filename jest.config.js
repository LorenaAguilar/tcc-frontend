module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',
  moduleNameMapper: {
    '^.+\\.(svg|png|jpg|jpeg)$': '<rootDir>/src/__mocks__/svgMock.ts',
  },
  coverageDirectory: 'reports',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/components/formikAutoCompletePlaces/*.{ts,js,jsx,tsx}',
    '!src/pages/home/components/map/Map.tsx',
    '!src/components/header/components/userNotLogged/UserNotLogged.tsx',
    '!src/pages/home/components/infoWindow/InfoWindow.tsx',
    '!src/**/*.{styles,style}.{ts,js,jsx,tsx}',
    '!src/reportWebVitals.ts',
    '!src/**/*.d.ts',
    '!src/themes/*.js',
    '!src/clients/*.ts',
    '!src/constants.ts',
    '!src/assets/*.tsx',
    '!src/assets/*.svg',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 90,
      statements: 90,
    },
  },
};
