import { React, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useLocation, matchPath } from 'react-router-dom';
import {
  DropDownButton,
  NavbarContainer,
  SidebarButton,
  DropdownToggle,
  MobileDropdownToggle,
  BreadcrumbsContainer,
} from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { LargeText } from '../text/TextElements';
import Drowpdown from '../dropdown';
import BreadcrumbsBar from '../breadcrumbs';

function Navbar({
  showTutoringModal,
  setShowTutoringModal,
  showStudentModal,
  setShowStudentModal,
  showSidebar,
  setShowSidebar,
}) {
  const { user } = UserAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();
  const inMajorPath = !!matchPath('homepage/:abbreviation/:major', pathname);

  const getName = (fullName) => {
    if (fullName) {
      const names = fullName.split(' ');
      return names[0];
    }
    return '';
  };

  const openDropDown = () => {
    setShowDropdown(!showDropdown);
  };

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const dropdown = (
    <DropdownToggle>
      <DropDownButton onClick={openDropDown}>
        <MenuRoundedIcon />
      </DropDownButton>
      <Drowpdown
        type="modalDropdown"
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        showTutoringModal={showTutoringModal}
        setShowTutoringModal={setShowTutoringModal}
        showStudentModal={showStudentModal}
        setShowStudentModal={setShowStudentModal}
      />
    </DropdownToggle>
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

      {inMajorPath && dropdown}

      <MobileDropdownToggle>
        <SidebarButton onClick={openSidebar}>
          <MenuRoundedIcon />
        </SidebarButton>
      </MobileDropdownToggle>
    </NavbarContainer>
  );
}

export default Navbar;
