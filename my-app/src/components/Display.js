import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  handleChange(e, key) {
    const item = this.props.items[key];
    // take cop of itme
    const updateItem = { ...item, [e.target]: e.target.value };
    console.log(updateItem);
  }

  renderItems(key) {
    const items = this.props.items[key];

    return (
      <li className="item-wrapper" key={key}>
        <input
          value={items.title}
          type="text"
          name="title"
          placeholder="title"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          value={`$${items.amount}`}
          type="text"
          name="amount"
          placeholder="amount"
          onChange={e => this.handleChange(e, key)}
        />
        <input value={items.due} type="text" name="due" placeholder="due" onChange={e => this.handleChange(e, key)} />
        <input
          value={items.paid}
          type="text"
          name="paid"
          placeholder="paid"
          onChange={e => this.handleChange(e, key)}
        />
      </li>
    );
  }

  render() {
    return (
      <section className="display">
        <h1>Display</h1>
        <button onClick={this.props.loadSamples}>Load Sample Data</button>

        <ul className="list-of-items">{Object.keys(this.props.items).map(this.renderItems)}</ul>
      </section>
    );
  }
}

Display.propTypes = {
  loadSamples: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

export default Display;
