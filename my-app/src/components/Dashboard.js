import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render() {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    return (
      <div className="dashboard">
        <div className="dash-profile">
          <div className="dash-user">Logged in as: {userEmail}</div>
          <div className="dash-edit">
            <Gravatar email={userEmail} size={80} />
            <Link to={`/edit/${userName}`} className="edit-profle-btn">
              Edit Profile
            </Link>
          </div>
        </div>
        <h1>{userName}</h1>
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
