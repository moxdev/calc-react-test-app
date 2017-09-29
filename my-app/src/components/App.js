import React, { Component } from 'react';
import Header from './Header';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
