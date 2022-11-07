import React from 'react'
import { IconButton, MenuContainer } from './MenuElements'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
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
        <IconButton>
            <PersonOutlineRoundedIcon /> profil
        </IconButton>
        <IconButton>
            <MailOutlineRoundedIcon /> chat
        </IconButton>
        <IconButton>
            <CalendarMonthRoundedIcon /> kalendarz
        </IconButton>
        <IconButton>
            <FavoriteBorderRoundedIcon /> ulubione
        </IconButton>
        <IconButton onClick={handleLogOut}>
            <LogoutRoundedIcon /> wyloguj
        </IconButton>
    </MenuContainer>
  )
}

export default Menu