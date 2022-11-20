import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../homepage';
import Profile from '../profile';
import Calendar from '../calendar';
import Majors from '../majors';
import Announcements from '../announcements';
import Chat from '../chat';
import Favourites from '../favourites';

function DashboardRouting() {
  return (
    <Routes>
      <Route path="home" element={<Homepage />} />
      <Route path="profil" element={<Profile />} />
      <Route path="kalendarz" element={<Calendar />} />
      <Route path="chat" element={<Chat />} />
      <Route path="ulubione" element={<Favourites />} />
      <Route path="/home/:abbreviation" element={<Majors />} />
      <Route
        path="/home/:abbreviation/:major"
        element={<Announcements />}
      />
      <Route exact path="/" element={<Navigate to="home" />} />
      {/* <Route path = "*" element={no page found} /> */}
    </Routes>
  );
}

export default DashboardRouting;
