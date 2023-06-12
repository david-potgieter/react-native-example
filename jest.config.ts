import type { Config } from 'jest'

const config: Config = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/__tests__/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
}

export default config
