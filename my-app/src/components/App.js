import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Title />
        </div>
      </div>
    );
  }
}

export default App;
