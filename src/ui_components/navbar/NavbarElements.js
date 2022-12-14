import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 14vh;
  background: var(--white);
  border-bottom: 5px solid transparent;
  border-image: var(--gradient-horizontal);
  border-image-slice: 1;
  display: flex;
  flex-direction: row;
  row-gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.25rem;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 1/2;
    z-index: 2;
    padding: 0.5rem 2rem;
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

export const SidebarButton = styled(IconButton)`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const MobileDropdownToggle = styled.section`
  flex-direction: column;
  align-items: flex-end;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;
`;

export const AddButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    row-gap: 0.25rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
