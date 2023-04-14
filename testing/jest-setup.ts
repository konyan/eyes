import { enableFetchMocks } from 'jest-fetch-mock';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
enableFetchMocks();
