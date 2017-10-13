import { firebaseAuthKey, appTokenKey, firebaseAuth, googleProvider, twitterProvider } from '../config/constants';

export function loginWithGoogle() {
  return firebaseAuth().signInWithRedirect(googleProvider);
}

export function loginWithTwitter() {
  return firebaseAuth().signInWithRedirect(twitterProvider);
}

export function logout() {
  return firebaseAuth().signOut();
}
