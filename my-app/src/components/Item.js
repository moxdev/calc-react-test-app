import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const { details } = this.props;
    // instead of using this.props.details.title etc everytime

    return (
      <li className="item">
        <h3>{details.title}</h3>
        <span>${details.amount}</span>
        <span>{details.due}</span>
        <span>{details.paid}</span>
      </li>
    );
  }
}

export default Item;

Item.propTypes = {
  details: PropTypes.object.isRequired
};
