import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAA7v56oVnf0H6SiqT3TVLVNQ9l0xldePU',
  authDomain: 'bills-test-app-f06d5.firebaseapp.com',
  databaseURL: 'https://bills-test-app-f06d5.firebaseio.com',
  projectId: 'bills-test-app-f06d5',
  storageBucket: 'bills-test-app-f06d5.appspot.com',
  messagingSenderId: '878236368012'
});

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export const storageKey = 'pain-login-regnipelk';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
};
