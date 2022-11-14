import { React, useState } from 'react';
import {
  CenterContainer,
  DashboardContainer,
  MainContainer,
} from './DashboardElements';
import LeftSidebar from '../../components/leftSidebar';
import RightSidebar from '../../components/rightSidebar';
import Navbar from '../../components/navbar';
import Modal from '../../components/modal';
import { getAnnouncements } from '../../firebase/announcementService';
import MobileSidebar from '../../components/mobileSidebar';

function Dashboard() {
  const [showTutoringModal, setShowTutoringModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  getAnnouncements();
  return (
    <>
      <Modal
        showModal={showTutoringModal}
        setShowModal={setShowTutoringModal}
        announcementType="tutor"
      />
      <Modal
        showModal={showStudentModal}
        setShowModal={setShowStudentModal}
        announcementType="student"
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
          <MainContainer />
        </CenterContainer>
        <RightSidebar />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
