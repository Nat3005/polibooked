import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background: var(--white);
  box-shadow: 0px 4px 8px rgba(130, 71, 255, 0.25);
  position: absolute;
  top: 60px;
  z-index: 100;
  padding: 1rem;
  border-radius: var(--outer-radius);
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
