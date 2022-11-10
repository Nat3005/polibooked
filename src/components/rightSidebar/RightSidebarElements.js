import styled from 'styled-components';

export const RightSidebarContainer = styled.div`
  height: 100vh;
  background: var(--white);
  grid-column: 10/13;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
