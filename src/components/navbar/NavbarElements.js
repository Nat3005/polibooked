import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 10vh;
  background: var(--white);
  border-bottom: 5px solid transparent;
  border-image: var(--gradient-horizontal);
  border-image-slice: 1;
  display: flex;
  flex-direction: row;
  row-gap: 2rem;
`;
