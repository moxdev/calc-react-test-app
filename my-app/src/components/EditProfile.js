import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EditProfile extends Component {
  saveUserProfile = e => {
    e.preventDefault();

    const updatedUserInfo = {
      displayName: this.displayName.getValue(),
      email: this.email.getValue()
    };

    this.props.updateUserProfile(updatedUserInfo);
  };

  render() {
    return (
      <div className="edit-profile">
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
          <RaisedButton label="Save Changes" labelColor={'#ffffff'} backgroundColor="#D32F2F" type={'submit'} />
        </form>
      </div>
    );
  }
}

export default EditProfile;

EditProfile.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  updateUserProfile: PropTypes.func
};
