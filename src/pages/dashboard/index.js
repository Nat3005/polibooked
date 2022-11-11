import {React, useState} from 'react';
import {
  CenterContainer,
  DashboardContainer,
  MainContainer,
} from './DashboardElements';
import LeftSidebar from '../../components/leftSidebar';
import RightSidebar from '../../components/rightSidebar';
import Navbar from '../../components/navbar';
import Modal from '../../components/modal';

function Dashboard() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    <DashboardContainer>
      <LeftSidebar />
      <CenterContainer>
        <Navbar showModal={showModal} setShowModal={setShowModal}/>
        <MainContainer />
      </CenterContainer>
      <RightSidebar />
    </DashboardContainer>
    </>
  );
}

export default Dashboard;
