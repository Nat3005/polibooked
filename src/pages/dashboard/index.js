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

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  getAnnouncements();
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        announcementType="tutor"
      />
      <DashboardContainer>
        <LeftSidebar />
        <CenterContainer>
          <Navbar showModal={showModal} setShowModal={setShowModal} />
          <MainContainer />
        </CenterContainer>
        <RightSidebar />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
