import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAA7v56oVnf0H6SiqT3TVLVNQ9l0xldePU',
  authDomain: 'bills-test-app-f06d5.firebaseapp.com',
  databaseURL: 'https://bills-test-app-f06d5.firebaseio.com',
  projectId: 'bills-test-app-f06d5',
  storageBucket: 'bills-test-app-f06d5.appspot.com',
  messagingSenderId: '878236368012'
});

const base = Rebase.createClass(app.database());

export default base;
