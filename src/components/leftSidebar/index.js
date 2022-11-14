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

function LeftSidebar() {
  const { user } = UserAuth();

  return (
    <LeftSidebarContainer>
      <PanelProfilePicture />
      <LeftPanelText
        style={{ alignSelf: 'center' }}
        weight="bold"
        variant="dark"
      >
        {user?.displayName}
      </LeftPanelText>
      <LeftPanelText varint="dark" alignment="left" weight="bold">
        {user?.major}
        {' | '}
        <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>
          {user?.faculty}
        </em>
      </LeftPanelText>
      {/* <LeftPanelText varint="dark">
        <em
          style={{
            color: 'var(--dark)',
            fontStyle: 'normal',
            fontWeight: 'var(--bold)',
          }}
        >
          Cost:{' '}
        </em>
        {user?.cost}
      </LeftPanelText> */}
      <LeftPanelText varint="dark" alignment="justify">
        {user?.description}
      </LeftPanelText>
      <ChipsContainer>
        {user?.tags.map((item) => (
          <Chip variant="light">{item}</Chip>
        ))}
      </ChipsContainer>
      <Menu />
      <Logo src={horizontalLogo} />
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
