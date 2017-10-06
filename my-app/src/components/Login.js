import React, { Component } from 'react';
import firebase from 'firebase';
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      uid: null
    };

    this.signInAuthGoogle = this.signInAuthGoogle.bind(this);
    this.signInAuthGithub = this.signInAuthGithub.bind(this);
    this.signInAuthEmail = this.signInAuthEmail.bind(this);
  }

  signInAuthGoogle() {
    var provider = new firebase.auth.TwitterAuthProvider();

    provider.setCustomParameters({
      display: 'popup'
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          console.log('Success');
        }
        // The signed-in user info.
        var user = result.user;
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('Error');
      });
  }

  signInAuthGithub() {
    var provider = new firebase.auth.GithubAuthProvider();

    provider.setCustomParameters({
      display: 'popup'
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          console.log('Success');
        }
        // The signed-in user info.
        var user = result.user;
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('Error');
      });
  }

  signInAuthEmail() {
    var provider = new firebase.auth.TwitterAuthProvider();

    provider.setCustomParameters({
      display: 'popup'
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(/*email, password*/)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  render() {
    if (!this.state.uid) {
      return (
        <div className="login">
          <h1>Login Please</h1>
          <button onClick={() => this.signInAuthGithub()}>Github</button>
          <button onClick={() => this.signInAuthGoogle()}>Twitter</button>
          <form className="signup">
            <input type="text" />
            <input type="text" />
            <button onClick={() => this.signInAuthEmail()}>Email</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
