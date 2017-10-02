import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentHeader extends Component {
  render() {
    return (
      <div className="content-header">
        <h1>{this.props.title}</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </div>
    );
  }
}

ContentHeader.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default ContentHeader;
