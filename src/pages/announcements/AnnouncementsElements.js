import styled from 'styled-components';

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1.25rem;
`;

export const NoAnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  alignself: center;
  justifyself: center;
  row-gap: 1rem;
`;
export const NoAnnouncementsImage = styled.img`
  width: 250px;
  height: auto;
`;
