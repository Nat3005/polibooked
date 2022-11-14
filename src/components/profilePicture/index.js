import React from 'react';
import { ProfilePictureContainer, Picture } from './ProfilePictureElements';
import { UserAuth } from '../../context/UserContext';

function ProfilePicture() {
  const { user } = UserAuth();
  return (
    <ProfilePictureContainer>
      <Picture src={user?.photoURL} />
    </ProfilePictureContainer>
  );
}

export default ProfilePicture;
