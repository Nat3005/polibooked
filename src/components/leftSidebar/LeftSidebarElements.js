import styled from 'styled-components';

export const LeftSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 1/4;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  align-self: flex-start;
  width: 70%;
  height: auto;
  margin-left: -20px;
`;
