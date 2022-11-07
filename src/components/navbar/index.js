import React from 'react';
import { NavbarContainer } from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { PrimaryButton } from '../buttons/ButtonElements';
import { LargeText } from '../text/TextElements';

function Navbar() {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (user === null) {
      navigate('/');
    }
  }, [user, navigate]);

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
        Hello{' '}
        <em style={{ color: 'var(--accent-purple)', fontStyle: 'normal' }}>{getName(user?.displayName)}</em>
      </LargeText>
      <PrimaryButton variant="purpleAccent" onClick={handleLogOut}>
        Log out
      </PrimaryButton>
    </NavbarContainer>
  );
}

export default Navbar;
