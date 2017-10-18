import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

import { firebaseAuth, appTokenKey } from '../config/constants';
// import { loginWithGoogle, loginWithTwitter } from '../helpers/auth';

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
    /**
    * We have appToken relevant for our backend API
    */

    if (localStorage.getItem(appTokenKey)) {
      if (localStorage.getItem('userName') != null) {
        const name = localStorage.getItem('userName');
        this.props.history.push(`/dashboard/${name}`);
      } else {
        this.props.history.push('/dashboard/null');
      }
    }

    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem(appTokenKey, user.uid);
        localStorage.setItem('userName', user.displayName);
        localStorage.setItem('userEmail', user.email);

        const name = localStorage.getItem('userName');
        this.props.history.push(`/dashboard/${name}`);
      } else {
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

    const name = localStorage.getItem('userName');

    firebaseAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(function() {
        if (name != null) {
          this.props.history.push(`/dashboard/${name}`);
        } else {
          this.props.history.push('/login');
        }
      })
      .catch(function(error) {
        console.log('We got an erro son:' + error);
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

Login.propTypes = {
  history: PropTypes.any
};
