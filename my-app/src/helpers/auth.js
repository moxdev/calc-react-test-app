import { firebaseAuth } from '../config/constants';

// const googleProvider = new firebaseAuth.googpleProvider();
// const twitterProvider = new firebaseAuth.googpleProvider();

// export function loginWithGoogle() {
//   return firebaseAuth().signInWithRedirect(googleProvider);
// }

// export function loginWithTwitter() {
//   return firebaseAuth().signInWithRedirect(twitterProvider);
// }

export function logout() {
  return firebaseAuth.signOut();
}
