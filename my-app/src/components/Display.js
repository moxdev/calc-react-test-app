import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Display extends Component {
  handleChange = (e, key) => {
    const item = this.props.items[key];
    // take copy of item
    const updateItem = { ...item, [e.target.name]: e.target.value };
    console.log(updateItem);
    this.props.updateItem(key, updateItem);
  };

  renderItems = key => {
    const items = this.props.items[key];

    return (
      <li className="item-wrapper" key={key}>
        <TextField
          name="title"
          value={items.title}
          ref={input => (this.title = input)}
          floatingLabelText="Title"
          type="text"
          onChange={e => this.handleChange(e, key)}
        />
        <br />
        <TextField
          name="amount"
          value={items.amount}
          ref={input => (this.amount = input)}
          floatingLabelText="Amount"
          type="text"
          onChange={e => this.handleChange(e, key)}
        />
        <br />
        <TextField
          name="due"
          value={items.due}
          ref={input => (this.due = input)}
          floatingLabelText="Due Date"
          type="text"
          onChange={e => this.handleChange(e, key)}
        />
        <br />
        <TextField
          name="paid"
          value={items.paid}
          ref={input => (this.due = input)}
          floatingLabelText="Paid Date"
          type="text"
          onChange={e => this.handleChange(e, key)}
        />
        <RaisedButton
          className="save-edit-btn"
          label="Delete Item"
          labelColor={'#ffffff'}
          backgroundColor="#D32F2F"
          onClick={() => this.props.deleteItem(key)}
        />
      </li>
    );
  };

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
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

export default Display;
