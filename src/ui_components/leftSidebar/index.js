import React from 'react';
import {
  ChipsContainer,
  LeftSidebarContainer,
  Logo,
} from './LeftSidebarElements';
import { UserAuth } from '../../context/UserContext';
import { Chip } from '../../ui_elements/chips/ChipsElements';
import Menu from '../../ui_elements/menu';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { SmallText } from '../../ui_elements/text/TextElements';
import ProfilePicture from '../../ui_elements/profilePicture';

function LeftSidebar() {
  const { user } = UserAuth();

  return (
    <LeftSidebarContainer>
      <ProfilePicture />
      <SmallText style={{ alignSelf: 'center' }} weight="bold" variant="dark">
        {user?.displayName}
      </SmallText>
      <SmallText varint="dark" alignment="left" weight="bold">
        {user?.major}
        {' | '}
        <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>
          {user?.faculty}
        </em>
      </SmallText>
      <SmallText varint="dark" alignment="justify">
        {user?.description}
      </SmallText>
      <ChipsContainer>
        {user?.tags?.map((item) => (
          <Chip key={item} variant="light">
            {item}
          </Chip>
        ))}
      </ChipsContainer>
      <Menu />
      <Logo src={horizontalLogo} />
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
