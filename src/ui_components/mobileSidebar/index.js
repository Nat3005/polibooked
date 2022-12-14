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
import { MediumText } from '../../ui_elements/text/TextElements';
import ProfilePicture from '../../ui_elements/profilePicture';
import horizontalLogo from '../../images/logo_horizontal.svg';
import { TertiaryButton } from '../../ui_elements/buttons/ButtonElements';
import Menu from '../../ui_elements/menu';

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
      <TertiaryButton
        onClick={openTutoringModal}
        variant="purpleAccent"
        aria-label="Zostań korepetytorem"
      >
        {' '}
        <SchoolRoundedIcon />
        Zostań korepetytorem{' '}
      </TertiaryButton>
      <TertiaryButton
        onClick={openStudentModal}
        variant="yellowAccent"
        aria-label="Znajdź korepetytora"
      >
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
        <MediumText variant="purpleAccent" weight="bold">
          {user?.displayName}
        </MediumText>
        {inMajorPath && buttons}
        <Menu style={{ alignSelf: 'flex-start' }} />
      </SidebarContent>
      <LogoContainer>
        <Logo src={horizontalLogo} alt="logo" />
      </LogoContainer>
    </SidebarContainer>
  );
}

export default MobileSidebar;
