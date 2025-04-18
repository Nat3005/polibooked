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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const TabContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem 0rem;
`;

export const NoEventsContainer = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-self: center;
  justify-self: center;
  height: 50vh;
  row-gap: 1rem;
`;

export const NoEventsImage = styled.img`
  width: 250px;
  height: auto;
`;
