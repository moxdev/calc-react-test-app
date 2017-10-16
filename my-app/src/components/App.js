import React, { Component } from 'react';
import PropTypes from 'prop-types';

import base from '../config/base';
import { appTokenKey } from '../config/constants';
import { firebaseAuthKey } from '../config/constants';
import { firebaseAuth } from '../config/constants';
import { logout } from '../helpers/auth.js';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.userRef = base.syncState('user', {
      context: this,
      state: 'user'
    });
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const userDeets = { ...this.state.user };
        userDeets.uid = user.uid;
        userDeets.displayName = user.displayName;
        userDeets.email = user.email;
        this.setState({ user: userDeets });
      } else {
        console.log('No User');
      }
      console.log(this.state.user);
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.userRef);
  }

  handleLogout = () => {
    logout().then(
      function() {
        localStorage.removeItem(appTokenKey);
        localStorage.removeItem(firebaseAuthKey);

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

App.propTypes = {
  history: PropTypes.any
};

export default App;
