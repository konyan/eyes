import 'react-native-gesture-handler/jestSetup';
import { enableFetchMocks } from 'jest-fetch-mock';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Reanimated.default.call = () => {};

  return Reanimated;
});

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
