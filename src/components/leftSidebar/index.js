import React from 'react';
import {
  ChipsContainer,
  LeftSidebarContainer,
  PanelProfilePicture,
  Logo,
  LeftPanelText,
} from './LeftSidebarElements';
import { UserAuth } from '../../context/UserContext';
import { Chip } from '../chips/ChipsElements';
import Menu from '../menu';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { SmallText } from '../text/TextElements';
import { MyIcon } from '../../utils/icons';

function LeftSidebar() {
  const { user } = UserAuth();

  return (
    <LeftSidebarContainer>
      <PanelProfilePicture />
      <SmallText
        style={{ alignSelf: 'center' }}
        weight="bold"
        variant="dark"
      >
        {user?.displayName}
<<<<<<< HEAD
      </SmallText>
      <SmallText varint="dark" alignment="left" weight="bold">
=======
        <MyIcon name="Pets" />
      </LeftPanelText>
      <LeftPanelText varint="dark" alignment="left" weight="bold">
>>>>>>> d328a7a9ad89adbb4195878f47e4ebb635f52e35
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
