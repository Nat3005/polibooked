import React from 'react';
import {
  LeftSidebarContainer,
  Logo,
  UserContainer,
} from './LeftSidebarElements';
import { UserAuth } from '../../context/UserContext';
import Menu from '../../ui_elements/menu';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { MediumText } from '../../ui_elements/text/TextElements';
import ProfilePicture from '../../ui_elements/profilePicture';

function LeftSidebar() {
  const { user } = UserAuth();

  return (
    <LeftSidebarContainer>
      <UserContainer>
        <ProfilePicture />
        <MediumText weight="bold" variant="purpleAccent">
          {user?.displayName}
        </MediumText>
      </UserContainer>
      <Menu />
      <Logo src={horizontalLogo} alt="logo" />
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
