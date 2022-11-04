import React from 'react';
import {
  CenterContainer,
  DashboardContainer,
  MainContainer,
} from './DashboardElements';
import LeftSidebar from '../../components/leftSidebar';
import RightSidebar from '../../components/rightSidebar';
import Navbar from '../../components/navbar';

function Dashboard() {
  return (
    <DashboardContainer>
      <LeftSidebar />
      <CenterContainer>
        <Navbar />
        <MainContainer />
      </CenterContainer>
      <RightSidebar />
    </DashboardContainer>
  );
}

export default Dashboard;
