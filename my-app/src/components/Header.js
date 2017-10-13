import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import logo from 'css/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="site-branding">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div className="nav">
          <RaisedButton
            backgroundColor="#a4c639"
            labelColor="#ffffff"
            label="Sign Out"
            onClick={this.props.handleLogout}
          />
        </div>
      </header>
    );
  }
}

export default Header;
