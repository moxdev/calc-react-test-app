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
    this.setState({ open: false });
    // console.log(key);
    // this.props.deleteItem(key);
  };

  handleChange = (e, key) => {
    const item = this.props.items[key];
    const updateItem = { ...item, [e.target.name]: e.target.value };
    this.props.updateItem(key, updateItem);
  };

  renderItems = key => {
    const items = this.props.items[key];
    console.log(items);
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Discard" primary={true} onClick={this.handleClose} />
    ];

    return (
      <li className="item-wrapper" key={key}>
        <Card>
          <CardTitle title={items.title} subtitle={items.due} />

          <CardText>
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
          </CardText>
          <CardActions>
            <RaisedButton
              className="save-edit-btn"
              label="Delete Item"
              labelColor={'#ffffff'}
              backgroundColor="#D32F2F"
              onClick={this.handleOpen}
            />
            <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
              Discard Item? This action cannot be undone!
            </Dialog>
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
