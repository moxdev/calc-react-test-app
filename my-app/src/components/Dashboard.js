import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dash-profile">
          <div className="dash-user">Logged in as: {this.props.email}</div>
          <div className="dash-edit">
            <Gravatar email={this.props.avatar} size={80} />
            <Link to={`/edit/${this.props.userName}`} className="edit-profle-btn">
              Edit
            </Link>
          </div>
        </div>
        <h1>{this.props.userName}&apos;</h1>
        <h2>Dashboard</h2>
      </div>
    );
  }
}

export default Dashboard;

Dashboard.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  updateUserProfile: PropTypes.func
};
