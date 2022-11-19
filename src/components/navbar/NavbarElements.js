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
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 1/2;
    z-index: 2;
  }
`;

export const IconButton = styled.button`
  background-color: var(--accent-purple);
  border-radius: var(--inner-radius);
  color: var(--white);
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: var(--accent-yellow);
    color: var(--dark);
    transition: all 0.2s ease-in-out;
  }
`;

export const DropDownButton = styled(IconButton)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarButton = styled(IconButton)`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const DropdownToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileDropdownToggle = styled(DropdownToggle)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
