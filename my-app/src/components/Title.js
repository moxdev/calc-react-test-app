import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  state = {
    textInput: 'My Project'
  };
  render() {
    return (
      <div className="main-title">
        <h1>Project</h1>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.element.isRequired
};

export default Title;
