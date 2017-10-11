import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

import { loginWithGoogle, loginWithTwitter } from '../helpers/auth';
import { firebaseAuth } from '../config/constants';

class Login extends Component {
  state = {
    splashScreen: false
  };

  handleGoogleLogin = e => {
    e.preventDefault();
  };

  handleTwitterLogin = e => {
    e.preventDefault();
  };

  render() {
    const iconStylesGoogle = {
      color: '#ffffff',
      background: '#dd4b39',
      margin: '0 .5em'
    };

    const iconStylesTwitter = {
      color: '#ffffff',
      background: '#1DA1F2',
      margin: '0 .5em'
    };

    return (
      <section className="login">
        <h1>Login Son I aint got allday</h1>

        <RaisedButton
          label="Sign in with Google"
          labelColor={'#ffffff'}
          backgroundColor="#dd4b39"
          icon={<FontIcon className="fa fa-google-plus" />}
        />

        <RaisedButton
          label="Sign in with Google"
          labelColor={'#ffffff'}
          backgroundColor="#1DA1F2"
          icon={<FontIcon className="fa fa-twitter" />}
        />

        <form className="signin" onSubmit={e => this.signInAuthEmail(e)}>
          <TextField ref={input => (this.signInEmail = input)} floatingLabelText="Email" />
          <br />

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

export default Login;
