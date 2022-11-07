import React from 'react';
import { NavbarContainer } from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { PrimaryButton } from '../buttons/ButtonElements';

function Navbar() {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <NavbarContainer>
      <div>Welcome {user?.displayName}</div>
      <PrimaryButton variant="purpleAccent" onClick={handleLogOut}>
        Log out
      </PrimaryButton>
    </NavbarContainer>
  );
}

export default Navbar;
