import './App.css';
import React from 'react';
import { CenterContainer, DashboardContainer, LeftDrawer, MainContainer, Navbar, RightDrawer } from './AppElements';

function App() {
  return (
    <DashboardContainer>
      <LeftDrawer></LeftDrawer>
      <CenterContainer>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      </CenterContainer>
      <RightDrawer></RightDrawer>
    </DashboardContainer>
  );
}

export default App;