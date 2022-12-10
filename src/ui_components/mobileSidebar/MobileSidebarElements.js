import styled from 'styled-components';
import { GridContainer } from '../../ui_elements/grid/GridElements';

export const SidebarContainer = styled(GridContainer)`
  height: 100%;
  width: 100%;
  background: var(--white);
  position: absolute;
  z-index: 100;
  align-items: center;
  padding: 0rem 1rem;
  grid-template-rows: 50px auto auto;
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: start;
  grid-column: 1/13;
  grid-row: 1/2;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
  }

  @media screen and (max-width: 456px) {
    grid-column: 1/5;
  }
`;

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    grid-column: 5/9;
    grid-row: 2/3;

    @media screen and (max-width: 768px) {
        grid-column: 2/8;
      }

      @media screen and (max-width: 456px) {
        grid-column: 1/5;
        padding: 0rem 2rem;
      }

    }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 50%;
  height: auto;
  align-self: end;
`;

export const LogoContainer = styled.div`
  grid-row: 3/4;
  grid-column: 1/13;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
  }
  @media screen and (max-width: 456px) {
    grid-column: 1/5;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
