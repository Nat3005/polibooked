import React from 'react';
import {
  ChipsContainer,
  LeftSidebarContainer,
  Logo,
} from './LeftSidebarElements';
import { UserAuth } from '../../context/UserContext';
import { Chip } from '../chips/ChipsElements';
import Menu from '../menu';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { SmallText } from '../text/TextElements';
import { MyIcon } from '../../utils/icons';
import ProfilePicture from '../profilePicture';

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
          <Chip variant="light">{item}</Chip>
        ))}
      </ChipsContainer>
      <Menu />
      <Logo src={horizontalLogo} />
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
