import React, { Component } from 'react';

class Display extends Component {
  state = {
    stuff: ''
  };

  render() {
    return (
      <div className="display-inner">
        <h1>Display</h1>
        <div className="wrapper">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Display;
