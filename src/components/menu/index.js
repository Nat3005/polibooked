import React from 'react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { IconButton, MenuContainer } from './MenuElements';
import { UserAuth } from '../../context/UserContext';

function Menu() {
  const { logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <MenuContainer>
      <IconButton to="/homepage">
        <ApartmentRoundedIcon /> strona główna
      </IconButton>
      <IconButton to="/profile">
        <PersonOutlineRoundedIcon /> profil
      </IconButton>
      <IconButton to="/chat">
        <MailOutlineRoundedIcon /> chat
      </IconButton>
      <IconButton to="/calendar">
        <CalendarMonthRoundedIcon /> kalendarz
      </IconButton>
      <IconButton to="/favourites">
        <FavoriteBorderRoundedIcon /> ulubione
      </IconButton>
      <IconButton onClick={handleLogOut}>
        <LogoutRoundedIcon /> wyloguj
      </IconButton>
    </MenuContainer>
  );
}

export default Menu;
