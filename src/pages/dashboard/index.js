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
import MobileSidebar from '../../components/mobileSidebar';
import AnnouncementCard from '../../components/announcementCard';
import { useAnnouncements } from '../../dataManagement';

function Dashboard() {
  const [showTutoringModal, setShowTutoringModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [announcements] = useAnnouncements();

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
            {announcements?.map((item) => (
              <AnnouncementCard announcement={item} />
            ))}
          </MainContainer>
        </CenterContainer>
        <RightSidebar />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
