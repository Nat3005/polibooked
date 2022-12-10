import React from 'react';
import { ProfilePictureContainer, Picture } from './ProfilePictureElements';
import { UserAuth } from '../../context/UserContext';

function ProfilePicture({ className }) {
  const { user } = UserAuth();
  return (
    <ProfilePictureContainer className={className}>
      <Picture src={user?.photoURL} />
    </ProfilePictureContainer>
  );
}

export default ProfilePicture;
