import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class Display extends Component {
  render() {
    return (
      <section className="display">
        <h1>Display</h1>
        <button onClick={this.props.loadSamples}>Load Sample Data</button>

        <ul className="list-of-items">
          {Object.keys(this.props.items).map(key => <Item key={key} details={this.props.items[key]} />)}
        </ul>
      </section>
    );
  }
}

Display.propTypes = {
  loadSamples: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

export default Display;
