import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Create extends Component {
  createItem(e) {
    e.preventDefault();

    const newItem = {
      title: this.title.value,
      amount: this.amount.value,
      due: this.due.value,
      paid: this.paid.value
    };

    this.props.addItem(newItem);
  }
  render() {
    return (
      <section className="create">
        <h1>Create</h1>
        <form onSubmit={e => this.createItem(e)}>
          <input ref={input => (this.title = input)} type="text" placeholder="Title" />
          <input ref={input => (this.amount = input)} type="text" placeholder="Amount" />
          <input ref={input => (this.due = input)} type="text" placeholder="Due Date" />
          <input ref={input => (this.paid = input)} type="text" placeholder="Paid Date" />
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}

Create.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default Create;
