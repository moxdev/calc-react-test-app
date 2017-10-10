import { React, Component } from 'react';
import { Redirect } from 'react-router-dom';

import firebase from 'firebase';
import { auth } from '../base';

class Landing extends Component {
  state = {
    email: null,
    password: null,
    redirectToReferrer: false
  };

  signUpWithEmail(e) {
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
      })
      /*eslint-enable*/
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        /* eslint-disable */
        console.log('Email Sign Up Error');
        console.log(errorCode);
        console.log(errorMessage);
        /*eslint-enable*/
      });
  }

  render() {
    return <h1>Landing Page</h1>;
  }
}

export default Landing;
