import styled from 'styled-components';
import { GridContainer } from '../../components/grid/GridElements';

export const DashboardContainer = styled(GridContainer)`
  height: 100vh;
  background: var(--white);
  overflow: hidden;
`;

export const MainContainer = styled.div`
  height: 90vh;
  background: var(--neutral-purple);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 2/3;
  }

  @media screen and (max-width: 456px) {
    grid-column: 1/5;
    grid-row: 2/3;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3/10;
  border-right: var(--border-style);
  border-left: var(--border-style);
  border-color: var(--primary-light);

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 1/3;
  }
  @media screen and (max-width: 456px) {
    grid-column: 1/5;
    grid-row: 1/3;
  }
`;
