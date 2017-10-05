import React, { Component } from 'react';
import Header from './Header';
import ContentHeader from './ContentHeader';
import Create from './Create';
import Display from './Display';
import sampleItems from '../sample-items.js';
import base from '../base';

/* eslint react/prop-types: 0 */

class Content extends Component {
  constructor() {
    super();

    this.state = {
      items: {}
    };

    this.loadSamples = this.loadSamples.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  // Sync to Firebase
  componentWillMount() {
    this.ref = base.syncState(`project/${this.props.match.params.pageID}`, {
      context: this,
      state: 'items'
    });
  }

  // Stop syncing when component un mounts
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSamples() {
    this.setState({
      items: sampleItems
    });
  }

  addItem(item) {
    const items = { ...this.state.newItems };
    const timestamp = Date.now();

    items[`bill-${timestamp}`] = item;

    this.setState({ items });
    // ES6 same as > this.setState({ items: items });
  }

  updateItem(key, updated) {
    const items = { ...this.state.items };
    items[key] = updated;
    this.setState({ items });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <ContentHeader title={this.props.match.params.pageID} />
          <div className="main-wrapper">
            <Create addItem={this.addItem} />
            <Display items={this.state.items} loadSamples={this.loadSamples} updateItem={this.updateItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
