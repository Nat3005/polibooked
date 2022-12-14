import { React, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import LeftSidebar from '../../ui_components/leftSidebar';
import Navbar from '../../ui_components/navbar';
import {
  CenterContainer,
  DashboardContainer,
  MainContainer,
} from './DashboardElements';
import DashboardRouting from './DashboardRouting';
import Modal from '../../ui_components/modal';
import MobileSidebar from '../../ui_components/mobileSidebar';
import EventModal from '../../ui_components/eventModal';
import BookModal from '../../ui_components/bookModal';

function Dashboard() {
  const [showTutoringModal, setShowTutoringModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  // Edit Modal managment
  const [editedAnnouncement, setEditedAnnouncement] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleEditModal = (announcement = null) => {
    setEditedAnnouncement(announcement);
    setShowEditModal(!!announcement);
  };
  // Edit Modal managment

  const [bookFromAnnouncement, setBookFromAnnouncement] = useState(null);
  const [showBookModal, setShowBookModal] = useState(false);
  const toggleBookModal = (announcement = null) => {
    setBookFromAnnouncement(announcement);
    setShowBookModal(!!announcement);
  };

  const { pathname } = useLocation();
  let type = 'scroll';
  if (!!matchPath('czat', pathname) || !!matchPath('czat/rozmowa', pathname)) {
    type = 'noScroll';
  }
  return (
    <>
      {showBookModal && (
        <BookModal
          showModal={showBookModal}
          setShowModal={setShowBookModal}
          announcement={bookFromAnnouncement}
        />
      )}
      <EventModal
        showEventModal={showEventModal}
        setShowEventModal={setShowEventModal}
      />
      <Modal
        showModal={showTutoringModal}
        setShowModal={setShowTutoringModal}
        announcementType="tutorNew"
      />
      <Modal
        showModal={showStudentModal}
        setShowModal={setShowStudentModal}
        announcementType="studentNew"
      />
      <Modal
        showModal={showEditModal}
        setShowModal={toggleEditModal}
        announcementType={`${editedAnnouncement?.type}Edit`}
        announcement={editedAnnouncement}
      />
      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        showTutoringModal={showTutoringModal}
        setShowTutoringModal={setShowTutoringModal}
        showStudentModal={showStudentModal}
        setShowStudentModal={setShowStudentModal}
      />
      <DashboardContainer>
        <LeftSidebar />
        <CenterContainer>
          <Navbar
            showTutoringModal={showTutoringModal}
            setShowTutoringModal={setShowTutoringModal}
            showStudentModal={showStudentModal}
            setShowStudentModal={setShowStudentModal}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <MainContainer type={type}>
            <DashboardRouting
              openBookModal={toggleBookModal}
              openEditModal={toggleEditModal}
              setShowEventModal={setShowEventModal}
              showEventModal={showEventModal}
            />
          </MainContainer>
        </CenterContainer>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
