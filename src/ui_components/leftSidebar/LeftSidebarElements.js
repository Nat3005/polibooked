import styled from 'styled-components';

export const LeftSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 1/4;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  align-self: center;
  width: 100%;
  height: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;
