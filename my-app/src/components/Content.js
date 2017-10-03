import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <ContentHeader title={this.props.match.params.pageID} />
          <div className="main-wrapper">
            <Create />
            <Display />
          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  match: PropTypes.element.isRequired
};

export default Content;
