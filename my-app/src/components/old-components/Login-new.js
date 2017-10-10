import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
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

export default Login;
