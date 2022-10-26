import './App.css';
import React from 'react';
import {
  CenterContainer,
  DashboardContainer,
  LeftDrawer,
  MainContainer,
  Navbar,
  RightDrawer,
} from './AppElements';

function App() {
  return (
    <DashboardContainer>
      <LeftDrawer />
      <CenterContainer>
        <Navbar />
        <MainContainer />
      </CenterContainer>
      <RightDrawer />
    </DashboardContainer>
  );
}

export default App;
