import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  'margin-top': '1em'
};

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      editing: false
    };
  }

  editUserProfile = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  saveUserProfile = e => {
    e.preventDefault();

    const updatedUserInfo = {
      displayName: this.displayName.getValue(),
      email: this.email.getValue()
    };

    this.props.updateUserProfile(updatedUserInfo);

    this.setState({ editing: false });
  };

  renderEditDashboard = () => {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dash-profile">
          <Gravatar email={this.props.avatar} size={150} />
          <h3>{this.props.userName}</h3>
        </div>
        <form className="edit-user-profile-form" onSubmit={e => this.saveUserProfile(e)}>
          <h3>Edit Your Profile</h3>
          <TextField ref={input => (this.displayName = input)} floatingLabelText="Display Name" type="text" />
          <br />
          <TextField ref={input => (this.email = input)} floatingLabelText="Email" type="text" />
          <br />
          <RaisedButton
            label="Save Changes"
            labelColor={'#ffffff'}
            backgroundColor="#D32F2F"
            type={'submit'}
            style={style}
          />
        </form>
      </div>
    );
  };

  renderDashboard = () => {
    return (
      <div className="dashboard">
        <div className="dash-profile">
          <div className="dash-user">Logged in as: {this.props.email}</div>
          <div className="dash-edit">
            <Gravatar email={this.props.avatar} size={80} />
            <RaisedButton
              label="Edit Profile"
              labelColor={'#ffffff'}
              backgroundColor="#a4c639"
              style={style}
              onClick={e => {
                this.editUserProfile(e);
              }}
            />
          </div>
        </div>
        <h1>{this.props.userName}'s</h1>
        <h2>Dashboard</h2>
      </div>
    );
  };

  render() {
    if (this.state.editing) {
      return this.renderEditDashboard();
    } else {
      return this.renderDashboard();
    }
  }
}

export default Dashboard;

Dashboard.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string,
  updateUserProfile: PropTypes.func
};
