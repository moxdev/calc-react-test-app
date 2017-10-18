import React, { Component } from 'react';
import PropTypes from 'prop-types';

import base from '../config/base';
import { appTokenKey } from '../config/constants';
import { firebaseAuthKey } from '../config/constants';
import { firebaseAuth } from '../config/constants';
import { logout } from '../helpers/auth.js';

import sampleItems from '../sample-items';
import Header from './Header';
import Dashboard from './Dashboard';
import Create from './Create';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      items: {}
    };
  }

  componentWillMount() {
    this.userRef = base.syncState('user', {
      context: this,
      state: 'user'
    });
    this.itemsRef = base.syncState('items', {
      context: this,
      state: 'items'
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
    base.removeBinding(this.itemsRef);
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

  loadSamples = () => {
    this.setState({
      items: sampleItems
    });
  };

  addItem = item => {
    const items = { ...this.state.newItems };
    const timestamp = Date.now();

    items[`bill-${timestamp}`] = item;

    this.setState({ items });
    // ES6 same as > this.setState({ items: items });
  };

  updateItem = (key, updated) => {
    const items = { ...this.state.items };
    items[key] = updated;
    this.setState({ items });
  };

  removeItem = key => {
    const items = { ...this.state.items };
    items[key] = null; // this is for deleting from Firebase
    this.setState({ items });
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
          <div className="display-wrapper">
            <Create addItem={this.addItem} />
            <Display
              items={this.state.items}
              loadSamples={this.loadSamples}
              updateItem={this.updateItem}
              deleteItem={this.removeItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
