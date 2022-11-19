import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Route path="homepage" element={<Homepage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="chat" element={<Chat />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="majors" element={<Majors />} />
      <Route path="announcements" element={<Announcements />} />
    </Routes>
  );
}

export default DashboardRouting;
