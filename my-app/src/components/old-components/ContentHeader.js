import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagline: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      tagline: e.target.value
    });
  }

  render() {
    return (
      <div className="content-header">
        <h1>{this.props.title}</h1>
        <h3 className="tagline">
          <input
            ref={input => (this.tagline = input)}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add a tagline"
          />
        </h3>
      </div>
    );
  }
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ContentHeader;
