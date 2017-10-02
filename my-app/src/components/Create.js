import React, { Component } from 'react';

class Create extends Component {
  render() {
    return (
      <section className="create">
        <h1>Create</h1>
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Amount" />
          <input type="text" placeholder="Due Date" />
          <input type="text" placeholder="Paid Date" />
        </form>
      </section>
    );
  }
}

export default Create;
