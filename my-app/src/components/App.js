import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      uid: user.uid
    });
  }

  render() {
    return (
      <div className="main-container">
        <Header />
      </div>
    );
  }
}

export default App;
