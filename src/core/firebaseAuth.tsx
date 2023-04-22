import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
// Your web app's Firebase configuration

const FIREBASE_API_KEY = 'AIzaSyB-6oixNjHvqihoPCo0i7v5ONXhvtNqQWk';
const FIREBASE_AUTH_DOMAIN = 'donation-887a7.firebaseapp.com';
const FIREBASE_DATABASE_URL = 'https://donation-887a7.firebaseio.com';
const FIREBASE_PROJECT_ID = 'donation-887a7';
const FIREBASE_STORAGE_BUCKET = 'donation-887a7.appspot.com';
const FIREBASE_MESSAGING_SENDER_ID = '606079671431';
const FIREBASE_APP_ID = '1:606079671431:web:68b4348d8f2b9f3d6dac22';
// const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_DATABASE_URL,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
// } =" Constants?.expoConfig?.extra;

const firebaseConfig = {
  apiKey: 'AIzaSyB-6oixNjHvqihoPCo0i7v5ONXhvtNqQWk',
  authDomain: 'donation-887a7.firebaseapp.com',
  databaseURL: 'https://donation-887a7.firebaseio.com',
  projectId: 'donation-887a7',
  storageBucket: 'donation-887a7.appspot.com',
  messagingSenderId: '606079671431',
  appId: '1:606079671431:web:68b4348d8f2b9f3d6dac22',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
