import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAA7v56oVnf0H6SiqT3TVLVNQ9l0xldePU',
  authDomain: 'bills-test-app-f06d5.firebaseapp.com',
  databaseURL: 'https://bills-test-app-f06d5.firebaseio.com'
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

/* there is now a reference to the auth service at 
rebase.initializedApp.auth and firebase.auth
we use rebase.initializedApp.auth but could also 
export the auth service seperately 
*/

export default base;
