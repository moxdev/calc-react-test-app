import React, { Component } from 'react';
import firebase from 'firebase';
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      uid: null,
      email: null,
      password: null
    };

    this.signInAuthGoogle = this.signInAuthGoogle.bind(this);
    this.signInAuthGithub = this.signInAuthGithub.bind(this);
    this.signInAuthEmail = this.signInAuthEmail.bind(this);
    this.signUpWithEmail = this.signUpWithEmail.bind(this);
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

  signInAuthEmail(e) {
    e.preventDefault();
    const user = {
      email: this.signInEmail.value,
      password: this.signInPassword.value
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(function(firebaseUser) {
        console.log('success');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  signUpWithEmail(e) {
    e.preventDefault();

    const user = {
      email: this.signUpEmail.value,
      password: this.signUpPassword.value
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  render() {
    if (!this.state.uid) {
      return (
        <div className="login">
          <h1>Login Son I aint got allday</h1>
          <button onClick={() => this.signInAuthGithub()}>Github</button>
          <button onClick={() => this.signInAuthGoogle()}>Twitter</button>

          <form className="signin" onSubmit={e => this.signInAuthEmail(e)}>
            <input ref={input => (this.signInEmail = input)} type="text" placeholder="Email" />
            <input ref={input => (this.signInPassword = input)} type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>

          <form className="signup" onSubmit={e => this.signUpWithEmail(e)}>
            <h3>Sign up with email here</h3>
            <input ref={input => (this.signUpEmail = input)} type="text" placeholder="Email" />
            <input ref={input => (this.signUpPassword = input)} type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
