import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1.25rem 2.5rem;
`;

export const CalendarTabs = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TabPanelContainer = styled.div`
  width: auto;
  height: auto;
  overflow-y: scrol;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
`;
