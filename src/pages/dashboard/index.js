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
          <MainContainer>
            <DashboardRouting />
          </MainContainer>
        </CenterContainer>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
