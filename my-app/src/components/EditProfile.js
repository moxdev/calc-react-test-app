import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../config/constants';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EditProfile extends Component {
  saveUserProfile = e => {
    e.preventDefault();

    const user = firebaseAuth.currentUser;
    const newName = this.displayName.getValue();
    const newEmail = this.email.getValue();

    if (newName.length === 0 && newEmail.length === 0) {
      alert('No edits were made');
    }

    if (newName.length > 0) {
      user
        .updateProfile({
          displayName: newName
        })
        .then(function() {
          localStorage.setItem('userName', newName);
        })
        .catch(function(error) {
          alert('Error: ' + error);
        });
    }

    if (newEmail.length > 0) {
      user
        .updateEmail(newEmail)
        .then(function() {
          localStorage.setItem('userEmail', newEmail);
        })
        .catch(function(error) {
          alert('Error: ' + error);
        });
    }
  };

  render() {
    const profileAvatar = localStorage.getItem('userEmail');
    const profileName = localStorage.getItem('userName');

    return (
      <div className="edit-profile">
        <h1>{`${profileName} Profile`}</h1>
        <Gravatar email={profileAvatar} size={150} />

        <form className="edit-user-profile-form" onSubmit={e => this.saveUserProfile(e)}>
          <h3>Edit Your Profile</h3>
          <TextField ref={input => (this.displayName = input)} floatingLabelText="Display Name" type="text" />
          <br />
          <TextField ref={input => (this.email = input)} floatingLabelText="Email" type="text" />
          <br />
          <RaisedButton
            className="save-edit-btn"
            label="Save Changes"
            labelColor={'#ffffff'}
            backgroundColor="#D32F2F"
            type={'submit'}
          />
          <Link to={`/dashboard/${profileName}`} className="back-to-profile-link">
            Back to Profile
          </Link>
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
