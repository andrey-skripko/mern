import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4YQ4c7CUb87rR4ZoR9YtwOVV0w__Nk68',
  authDomain: 'mern-2c85c.firebaseapp.com',
  databaseURL: 'https://mern-2c85c.firebaseio.com',
  projectId: 'mern-2c85c',
  storageBucket: 'mern-2c85c.appspot.com',
  messagingSenderId: '512706962736',
  appId: '1:512706962736:web:df301d881614e3a6bd54f5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
