import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background-color: none;
  align-items: center;
`;

export const IconButton = styled(Link)`
  text-decoration: none;
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
