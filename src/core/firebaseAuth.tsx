import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
// Your web app's Firebase configuration
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
