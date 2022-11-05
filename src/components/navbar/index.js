import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer } from './NavbarElements';
import { UserAuth } from '../../context/UserContext';
import { PrimaryButton } from '../buttons/ButtonElements';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      error.log(error);
    }
  };

  useEffect(() => {
    if (user === null) {
      navigate('/');
    }
  }, [user, navigate]);

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
