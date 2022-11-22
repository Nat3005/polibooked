import { React, useState } from 'react';
import LeftSidebar from '../../components/leftSidebar';
import Navbar from '../../components/navbar';
import {
  CenterContainer,
  DashboardContainer,
  MainContainer,
} from './DashboardElements';
import DashboardRouting from './DashboardRouting';
import Modal from '../../components/modal';
import MobileSidebar from '../../components/mobileSidebar';

function Dashboard() {
  const [showTutoringModal, setShowTutoringModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Edit Modal managment
  const [editedAnnouncement, setEditedAnnouncement] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleEditModal = (announcement = null) => {
    setEditedAnnouncement(announcement);
    setShowEditModal(!!announcement);
  };
  // Edit Modal managment

  return (
    <>
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
          <MainContainer>
            <DashboardRouting openEditModal={toggleEditModal} />
          </MainContainer>
        </CenterContainer>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
