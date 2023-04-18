import { enableFetchMocks } from 'jest-fetch-mock';

// Create a mock object
const mockedConstants = {
  extra: {
    API_URL: 'https://api.example.com',
    FIREBASE_API_KEY: '1234567890',
    FIREBASE_AUTH_DOMAIN: 'example.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://example.firebaseio.com',
    FIREBASE_PROJECT_ID: 'example',
    FIREBASE_STORAGE_BUCKET: 'example.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '1234567890',
    FIREBASE_APP_ID: '1:1234567890:web:1234567890',
  },
};

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
enableFetchMocks();

jest.mock('expo-constants', () => mockedConstants);
