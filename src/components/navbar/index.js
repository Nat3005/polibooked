import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  DropDownButton,
  NavbarContainer,
  SidebarButton,
} from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { LargeText } from '../text/TextElements';

function Navbar({ showModal, setShowModal }) {
  const { user } = UserAuth();

  const getName = (fullName) => {
    if (fullName) {
      const names = fullName.split(' ');
      return names[0];
    }
    return '';
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <NavbarContainer>
      <LargeText varint="dark" alignment="left" weight="bold">
        Witaj{' '}
        <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>
          {getName(user?.displayName)}!
        </em>{' '}
      </LargeText>
      <DropDownButton onClick={openModal}>
        <MenuRoundedIcon />
      </DropDownButton>
      <SidebarButton onClick={openModal}>
        <MenuRoundedIcon />
      </SidebarButton>
    </NavbarContainer>
  );
}

export default Navbar;
