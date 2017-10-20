import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Display extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = (e, key) => {
    e.preventDefault();
    this.props.deleteItem(key);
  };

  handleChange = (e, key) => {
    const item = this.props.items[key];
    const updateItem = { ...item, [e.target.name]: e.target.value };
    this.props.updateItem(key, updateItem);
  };

  renderItems = key => {
    const items = this.props.items[key];
    const index = key;

    return (
      <li className="item-wrapper" key={key} index={index}>
        <Card>
          <CardTitle title={items.title} subtitle={items.due} />

          <CardText>
            <TextField
              name="title"
              value={items.title}
              ref={input => (this.title = input)}
              floatingLabelText="Title"
              type="text"
              fullWidth={true}
              onChange={e => this.handleChange(e, key)}
            />
            <br />
            <TextField
              name="amount"
              value={items.amount}
              ref={input => (this.amount = input)}
              floatingLabelText="Amount"
              type="text"
              fullWidth={true}
              onChange={e => this.handleChange(e, key)}
            />
            <br />
            <TextField
              name="due"
              value={items.due}
              ref={input => (this.due = input)}
              floatingLabelText="Due Date"
              type="text"
              fullWidth={true}
              onChange={e => this.handleChange(e, key)}
            />
            <br />
            <TextField
              name="paid"
              value={items.paid}
              ref={input => (this.due = input)}
              floatingLabelText="Paid Date"
              type="text"
              fullWidth={true}
              onChange={e => this.handleChange(e, key)}
            />
          </CardText>
          <CardActions>
            <RaisedButton
              className="save-edit-btn"
              label="Delete Item"
              labelColor={'#ffffff'}
              backgroundColor="#D32F2F"
              onClick={e => this.handleDelete(e, index)}
            />
          </CardActions>
        </Card>
      </li>
    );
  };

  render() {
    return (
      <section className="display">
        <h1>Display</h1>

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
