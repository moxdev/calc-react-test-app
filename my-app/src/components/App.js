import React, { Component } from 'react';
import PropTypes from 'prop-types';

import base from '../config/base';
import { appTokenKey } from '../config/constants';
import { firebaseAuthKey } from '../config/constants';
import { firebaseAuth } from '../config/constants';
import { logout } from '../helpers/auth.js';

import Header from './Header';
import Dashboard from './Dashboard';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
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
        userDeets.email = user.email;
        if (userDeets.displayName) {
          userDeets.displayName = user.displayName;
        }
        this.setState({ user: userDeets });
      } else {
        this.props.history.push('/login');
      }
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

        this.props.history.push('/login');
      }.bind(this)
    );
  };

  updateUserProfile = updatedUserInfo => {
    const user = { ...this.state.user };
    if (updatedUserInfo.displayName) {
      user.displayName = updatedUserInfo.displayName;
    }
    if (updatedUserInfo.email) {
      user.email = updatedUserInfo.email;
    }

    this.setState({ user });
  };

  render() {
    return (
      <div className="main-container">
        <Header handleLogout={this.handleLogout} />
        <div className="main-content">
          <Dashboard
            avatar={this.state.user.email}
            userName={this.state.user.displayName}
            email={this.state.user.email}
            updateUserProfile={this.updateUserProfile}
          />
          <Content />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
