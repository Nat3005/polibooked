import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../homepage';
import Profile from '../profile';
import Calendar from '../calendar';
import Majors from '../majors';
import Announcements from '../announcements';
import Chat from '../chat';
import Favourites from '../favourites';
import Conversation from '../conversation';

function DashboardRouting({
  openEditModal,
  setShowEventModal,
  showEventModal,
  openBookModal,
}) {
  return (
    <Routes>
      <Route path="home" element={<Homepage />} />
      <Route path="profil" element={<Profile />} />
      <Route
        path="kalendarz"
        element={
          <Calendar
            setShowEventModal={setShowEventModal}
            showEventModal={showEventModal}
          />
        }
      />
      <Route path="chat" element={<Chat />} />
      <Route
        path="ulubione"
        element={<Favourites openEditModal={openEditModal} />}
      />
      <Route path="/home/:abbreviation" element={<Majors />} />
      <Route
        path="/home/:abbreviation/:major"
        element={
          <Announcements
            openEditModal={openEditModal}
            openBookModal={openBookModal}
          />
        }
      />
      <Route path="/chat/rozmowa" element={<Conversation />} />
      <Route exact path="/" element={<Navigate to="home" />} />
      {/* <Route path = "*" element={no page found} /> */}
    </Routes>
  );
}

export default DashboardRouting;
