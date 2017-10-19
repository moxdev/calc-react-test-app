import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Create extends Component {
  createItem(e) {
    e.preventDefault();

    const newItem = {
      title: this.title.getValue(),
      amount: this.amount.getValue(),
      due: this.due.getValue(),
      paid: this.paid.getValue()
    };

    this.props.addItem(newItem);
    this.createItemsForm.reset();
  }

  render() {
    return (
      <section className="create">
        <h1>Create</h1>
        <form ref={input => (this.createItemsForm = input)} onSubmit={e => this.createItem(e)}>
          <Card>
            <CardText>
              <TextField ref={input => (this.title = input)} floatingLabelText="Title" type="text" />
              <br />
              <TextField ref={input => (this.amount = input)} floatingLabelText="Amount" type="text" />
              <br />
              <TextField ref={input => (this.due = input)} floatingLabelText="Due Date" type="text" />
              <br />
              <TextField ref={input => (this.paid = input)} floatingLabelText="Paid Date" type="text" />
              <br />
            </CardText>
            <CardActions>
              <RaisedButton
                className="save-edit-btn"
                label="Save Item"
                labelColor={'#ffffff'}
                backgroundColor="#a4c639"
                type={'submit'}
              />
            </CardActions>
          </Card>
        </form>
      </section>
    );
  }
}

Create.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default Create;
