import { Config } from '@jest/types';

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.

const untranspiledModulePatterns = [
  '((jest-)?react-native',
  '@react-native(-community)?)',
  'expo(nent)?',
  '@expo(nent)?/.*',
  '@expo-google-fonts/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg',
];

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${untranspiledModulePatterns.join('|')})`],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/testing/jest-setup.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/routes/',
    '<rootDir>/src/components/index.ts',
    '<rootDir>/src/screens/index.ts',
    '<rootDir>/src/svgIcons/index.ts',
    '<rootDir>/src/svgIcons/',
    '<rootDir>/src/hooks/index.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
  },
};

module.exports = config;
