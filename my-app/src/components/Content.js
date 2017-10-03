import React, { Component } from 'react';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Create from './Create';
import Display from './Display';

/* eslint react/prop-types: 0 */

class Content extends Component {
  constructor() {
    super();

    this.state = {
      items: {}
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    const items = { ...this.state.newItems };
    const timestamp = Date.now();

    items[`bill-${timestamp}`] = item;

    this.setState({ items });
    // ES6 same as > this.setState({ items: items });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <ContentHeader title={this.props.match.params.pageID} />
          <div className="main-wrapper">
            <Create addItem={this.addItem} />
            <Display />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
