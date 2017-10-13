import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAA7v56oVnf0H6SiqT3TVLVNQ9l0xldePU',
  authDomain: 'bills-test-app-f06d5.firebaseapp.com',
  databaseURL: 'https://bills-test-app-f06d5.firebaseio.com',
  projectId: 'bills-test-app-f06d5',
  storageBucket: 'bills-test-app-f06d5.appspot.com',
  messagingSenderId: '878236368012'
};

firebase.initializeApp(config);

export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export const firebaseAuthKey = 'firebaseAuthInProgress';
export const appTokenKey = 'appToken';
