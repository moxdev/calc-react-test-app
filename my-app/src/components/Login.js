import React, { Component } from 'react';
import base from '../base';
// import PropTypes from 'prop-types';

class Login extends Component {
  cosntructor() {
    super();
    this.state = {
      uid: null,
      owner: null
    };
  }
  render() {
    return (
      <div className="login">
        <h1>Login Please</h1>
        <button onClick={() => this.authenticate('facebook')}>Facebook</button>
        <button onClick={() => this.authenticate('twitter')}>Twitter</button>
        <button onClick={() => this.authenticate('email')}>Email</button>
      </div>
    );
  }
}

export default Login;
