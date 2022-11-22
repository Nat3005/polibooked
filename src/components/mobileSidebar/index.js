import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { matchPath, useLocation } from 'react-router-dom';
import { UserAuth } from '../../context/UserContext';
import {
  ButtonsContainer,
  SidebarContainer,
  Logo,
  LogoContainer,
  CloseContainer,
  SidebarContent,
} from './MobileSidebarElements';
import { SmallText } from '../text/TextElements';
import ProfilePicture from '../profilePicture';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { TertiaryButton } from '../buttons/ButtonElements';
import Menu from '../menu';

function MobileSidebar({
  showSidebar,
  setShowSidebar,
  showTutoringModal,
  setShowTutoringModal,
  showStudentModal,
  setShowStudentModal,
}) {
  const { pathname } = useLocation();
  if (!showSidebar) return null;

  const { user } = UserAuth();

  const openTutoringModal = () => {
    setShowTutoringModal(!showTutoringModal);
  };

  const openStudentModal = () => {
    setShowStudentModal(!showStudentModal);
  };

  const inMajorPath = !!matchPath('home/:abbreviation/:major', pathname);

  const buttons = (
    <ButtonsContainer>
      <TertiaryButton onClick={openTutoringModal} variant="purpleAccent">
        {' '}
        <SchoolRoundedIcon />
        Zostań korepetytorem{' '}
      </TertiaryButton>
      <TertiaryButton onClick={openStudentModal} variant="yellowAccent">
        {' '}
        <EmojiPeopleRoundedIcon />
        Znajdź korepetytora{' '}
      </TertiaryButton>
    </ButtonsContainer>
  );

  return (
    <SidebarContainer>
      <CloseContainer>
        <CloseRoundedIcon
          style={{ cursor: 'pointer' }}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </CloseContainer>
      <SidebarContent>
        <ProfilePicture />
        <SmallText variant="dark" weight="bold">
          {user?.displayName}
        </SmallText>
        <SmallText varint="dark" alignment="center" weight="bold">
          {user?.major}
          {' | '}
          <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>
            {user?.faculty}
          </em>
        </SmallText>
        {inMajorPath && buttons}
        <Menu style={{ alignSelf: 'flex-start' }} />
      </SidebarContent>
      <LogoContainer>
        <Logo src={horizontalLogo} />
      </LogoContainer>
    </SidebarContainer>
  );
}

export default MobileSidebar;
