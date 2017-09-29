import React from 'react';
import logo from 'css/logo.svg';

const Header = () => (
  <header>
    <div className="site-branding">
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
    </div>
    <div className="nav">
      <ul>
        <li>
          <a href="/">about</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
