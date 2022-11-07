import React from 'react';
import { NavbarContainer } from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { PrimaryButton } from '../buttons/ButtonElements';
import { LargeText } from '../text/TextElements';

function Navbar() {
  const { user } = UserAuth();

  const getName = (fullName) => {
    if(fullName){
      const names =  fullName.split(" ");
      return names[0];
    }
    else
      return;
  }

  return (
    <NavbarContainer>
      <LargeText varint="dark" alignment="left" weight="bold">
        Witaj {' '}
        <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>{getName(user?.displayName)}!</em>{' '}
      </LargeText>
    </NavbarContainer>
  );
}

export default Navbar;