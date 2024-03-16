// ProfileInfo.js

import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ username, followers, following, profilePicture }) => {
  return (
    <div className="profile-info">
      <img src={profilePicture} alt="Profil Resmi" />
      <h2>{username}</h2>
      <p>Takipçiler: {followers}</p>
      <p>Takip Edilen: {following}</p>
    </div>
  );
}

export default ProfileInfo;
