import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

import { loginWithGoogle, loginWithTwitter } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';

const firebaseAuthKey = 'firebaseAuthInProgress';
const appTokenKey = 'appToken';

const styleForm = {
  width: '400px'
};

const styleButton = {
  margin: '0 .25em'
};

class Login extends Component {
  state = {
    splashScreen: false
  };

  componentWillMount() {
    firebaseAuth()
      .getRedirectResult()
      .then(function(result) {
        if (result.user) {
          console.log('GoogleLogin Redirect result');
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // ...
          }
          // The signed-in user info.
          let user = result.user;
          console.log(user.uid);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(error);
      });

    /**
    * We have appToken relevant for our backend API
    */

    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push('/dashboard');
      return;
    }

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log('onAuthStateChanged user.uid = ' + user.uid);

        // localStorage.removeItem(firebaseAuthKey);
        localStorage.setItem(appTokenKey, user.uid);

        this.props.history.push('/dashboard');
      } else {
        console.log('onAuthStateChanged = No User Signed In');
        this.props.history.push('/login');
      }
    });
  }

  SplashScreen = () => <p>Loading...</p>;

  handleGoogleLogin = e => {
    e.preventDefault();
  };

  handleTwitterLogin = e => {
    e.preventDefault();
  };

  signInAuthEmail = e => {
    e.preventDefault();
    const user = {
      email: this.signInEmail.getValue(),
      password: this.signInPassword.getValue()
    };

    firebaseAuth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(function(firebaseUser) {
        console.log('Signed In: Sucess');
        console.log('firebaseUser.uid = ' + firebaseUser.uid);
        this.props.history.push('/dashboard');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error Code: ' + errorCode);
        console.log('Error Message: ' + errorMessage);
      });
  };

  render() {
    return (
      <section className="login">
        <h1>Welcome To The Jungle</h1>
        <h2>We Got Fun and Games</h2>

        <RaisedButton
          label="Sign in with Google"
          labelColor={'#ffffff'}
          backgroundColor="#dd4b39"
          icon={<FontIcon className="fa fa-google-plus" />}
          style={styleButton}
        />

        <RaisedButton
          label="Sign in with Google"
          labelColor={'#ffffff'}
          backgroundColor="#1DA1F2"
          icon={<FontIcon className="fa fa-twitter" />}
          style={styleButton}
        />

        <form className="signin" onSubmit={e => this.signInAuthEmail(e)}>
          <h3>Sign In</h3>
          <TextField
            ref={input => (this.signInEmail = input)}
            floatingLabelText="Email"
            type="text"
            style={styleForm}
          />
          <br />
          <TextField
            ref={input => (this.signInPassword = input)}
            floatingLabelText="Password"
            type="password"
            style={styleForm}
          />
          <br />
          <RaisedButton type="submit" label="Sign In &rsaquo;" primary={true} style={styleForm} />
        </form>

        <form className="signup" onSubmit={e => this.signUpWithEmail(e)}>
          <h3>Register Your Account</h3>
          <input ref={input => (this.signUpEmail = input)} type="text" placeholder="Email" />
          <input ref={input => (this.signUpPassword = input)} type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    );
  }
}

export default Login;
