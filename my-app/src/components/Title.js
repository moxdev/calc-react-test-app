import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  state = {
    textInput: ''
  };
  render() {
    const { title } = this.props;
    return (
      <div className="main-title">
        <h1>{title}</h1>
      </div>
    );
  }
}

Title.defaultProps = {
  title: 'My Project'
};

Title.propTypes = {
  title: PropTypes.element.isRequired
};

export default Title;
