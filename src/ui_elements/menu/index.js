import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
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
      <IconButton to="/home">
        <ApartmentRoundedIcon /> strona główna
      </IconButton>
      <IconButton to="/moje ogłoszenia">
        <ArticleOutlinedIcon /> moje ogłoszenia
      </IconButton>
      <IconButton to="/chat">
        <MailOutlineRoundedIcon /> chat
      </IconButton>
      <IconButton to="/kalendarz">
        <CalendarMonthRoundedIcon /> kalendarz
      </IconButton>
      <IconButton to="/ulubione">
        <FavoriteBorderRoundedIcon /> ulubione
      </IconButton>
      <IconButton onClick={handleLogOut}>
        <LogoutRoundedIcon /> wyloguj
      </IconButton>
    </MenuContainer>
  );
}

export default Menu;
