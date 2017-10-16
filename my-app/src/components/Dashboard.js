import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard">
        <h1>{this.props.userName} Dashboard</h1>
        <div className="dash-profile">
          <Gravatar email={this.props.avatar} size={150} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
