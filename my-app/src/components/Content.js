import React, { Component } from 'react';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Create from './Create';
import Display from './Display';

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <ContentHeader tagline="static tagline" />
        <div className="main-wrapper">
          <Create />
          <Display />
        </div>
      </div>
    );
  }
}

export default Content;
