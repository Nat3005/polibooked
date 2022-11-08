import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background-color: none;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    background-color: white;
  }
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;
  border: none;
  background: transparent;
  color: var(--primary-dark);
  font-size: var(--basic-text);
  cursor: pointer;

  :hover {
    color: var(--accent-purple);
    transition: all 0.2s ease-in-out;
  }
`;
