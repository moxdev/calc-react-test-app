import React, { Component } from 'react';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Create from './Create';
import Display from './Display';

class Content extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <ContentHeader title={this.props.match.params.pageID} tagline="static tagline" />
          <div className="main-wrapper">
            <Create />
            <Display />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
