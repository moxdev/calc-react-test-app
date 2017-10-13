import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { appTokenKey } from '../config/constants';
import { firebaseAuthKey } from '../config/constants';
import { firebaseAuth } from '../config/constants';
import { logout } from '../helpers/auth.js';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: null,
      user: null,
      displayName: null,
      photoURL: null
    };

    // this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        // window.localStorage.setItem(storageKey, user.uid);
        this.setState({
          user: user,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      }
    });
  }

  handleLogout = () => {
    logout().then(
      function() {
        localStorage.removeItem(appTokenKey);
        localStorage.removeItem(firebaseAuthKey);

        this.setState({
          user: null,
          uid: null,
          displayName: null,
          photoURL: null
        });

        console.log('Signed Out');
        console.log(this.state);
        console.log('user signed out from firebase');

        this.props.history.push('/login');
      }.bind(this)
    );
  };

  render() {
    return (
      <div className="main-container">
        <Header handleLogout={this.handleLogout} />
        <div className="main-content">
          <h1>My Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default App;
