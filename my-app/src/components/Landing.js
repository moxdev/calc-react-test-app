import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { firebase } from 'firebase';
import { auth } from '../base';

class Landing extends Component {
  signInAuthGoogle = () => {
    var provider = new firebase.auth.TwitterAuthProvider();

    provider.setCustomParameters({
      display: 'popup'
    });

    auth
      .signInWithPopup(provider)
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          /* eslint-disable */
          console.log('Success');
          console.log(token);
          /* eslint-enable */
        }
        // The signed-in user info.
        var user = result.user;
        /* eslint-disable */
        console.log(user);
        /* eslint-enable */
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        /* eslint-disable */
        console.log('Google Auth Error');
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        /* eslint-enable */
      });
  };

  signInAuthGithub = () => {
    var provider = new firebase.auth.GithubAuthProvider();

    provider.setCustomParameters({
      display: 'popup'
    });

    auth
      .signInWithPopup(provider)
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          /* eslint-disable */
          console.log('Success');
          console.log(token);
          /* eslint-enable */
        }
        // The signed-in user info.
        var user = result.user;
        /* eslint-disable */
        console.log(user);
        /* eslint-enable */
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        /* eslint-disable */
        console.log('Github Auth Error');
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        /* eslint-enable */
      });
  };

  signInAuthEmail = e => {
    e.preventDefault();

    const user = {
      email: this.signInEmail.value,
      password: this.signInPassword.value
    };

    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.setState({
          redirectToReferrer: true
        });
        /* eslint-disable */
        console.log('Email Sign In Success');
        console.log(this.state.email);
        console.log(this.state.redirectToReferrer);
        /* eslint-enable */
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        /* eslint-disable */
        console.log('Email Sign In Error');
        console.log(errorCode);
        console.log(errorMessage);
        /* eslint-enable */
      });
  };

  signUpWithEmail = e => {
    e.preventDefault();

    const user = {
      email: this.signUpEmail.value,
      password: this.signUpPassword.value
    };

    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function(firebaseUser) {
        this.setState({
          email: user.email,
          password: user.password,
          redirectToReferrer: true
        });
        /* eslint-disable */
        console.log('Email Sign Up Success');
        console.log(firebaseUser);
        console.log(this.state.email);
        console.log(this.state.password);
        /* eslint-enable */
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        /* eslint-disable */
        console.log('Email Sign Up Error');
        console.log(errorCode);
        console.log(errorMessage);
        /* eslint-enable */
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.props.redirectToReferrer;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <section className="login">
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
      </section>
    );
  }
}

export default Landing;
