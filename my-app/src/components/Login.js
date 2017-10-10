import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FontIcon, RaisedButton } from 'material-ui';
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
    return (
      <section className="login">
        <h1>Login Son I aint got allday</h1>

        <RaisedButton
          label="Sign in with Google"
          labelColor={'#ffffff'}
          backgroundColor="#dd4b39"
          icon={<FontIcon className="fa fa-google-plus" style={iconStyle} />}
          onClick={handleGoogleLogin}
        />

        <RaisedButton
          label="Sign in with Twitter"
          labelColor={'#ffffff'}
          backgroundColor="#328CC6;"
          icon={<FontIcon className="fa fa-twitter" />}
          onClick={handleTwitterLogin}
        />

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

export default Login;
