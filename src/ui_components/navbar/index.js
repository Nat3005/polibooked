import { React } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useLocation, matchPath } from 'react-router-dom';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import {
  NavbarContainer,
  SidebarButton,
  MobileDropdownToggle,
  BreadcrumbsContainer,
  AddButtonsContainer,
} from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { LargeText } from '../../ui_elements/text/TextElements';
import BreadcrumbsBar from '../breadcrumbs';
import { PrimaryButton } from '../../ui_elements/buttons/ButtonElements';

function Navbar({
  showTutoringModal,
  setShowTutoringModal,
  showStudentModal,
  setShowStudentModal,
  showSidebar,
  setShowSidebar,
}) {
  const { user } = UserAuth();
  const { pathname } = useLocation();
  const inMajorPath = !!matchPath('home/:abbreviation/:major', pathname);

  const getName = (fullName) => {
    if (fullName) {
      const names = fullName.split(' ');
      return names[0];
    }
    return '';
  };

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const openTutoringModal = () => {
    setShowTutoringModal(!showTutoringModal);
  };

  const openStudentModal = () => {
    setShowStudentModal(!showStudentModal);
  };

  const addButtons = (
    <AddButtonsContainer>
      <PrimaryButton
        size="big"
        onClick={openTutoringModal}
        variant="purpleAccent"
        aria-label="Zostań korepetytorem"
      >
        {' '}
        <SchoolRoundedIcon />
        Zostań korepetytorem{' '}
      </PrimaryButton>
      <PrimaryButton
        size="big"
        onClick={openStudentModal}
        variant="yellowAccent"
        aria-label="Znajdź korepetytora"
      >
        {' '}
        <EmojiPeopleRoundedIcon />
        Znajdź korepetytora{' '}
      </PrimaryButton>
    </AddButtonsContainer>
  );

  return (
    <NavbarContainer>
      <BreadcrumbsContainer>
        <LargeText varint="dark" alignment="left" weight="bold">
          Witaj{' '}
          <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>
            {getName(user?.displayName)}!
          </em>{' '}
        </LargeText>
        <BreadcrumbsBar />
      </BreadcrumbsContainer>
      {inMajorPath && addButtons}
      <MobileDropdownToggle>
        <SidebarButton onClick={openSidebar} aria-label="Menu">
          <MenuRoundedIcon />
        </SidebarButton>
      </MobileDropdownToggle>
    </NavbarContainer>
  );
}

export default Navbar;
