import styled from 'styled-components';
import { GridContainer } from '../../components/grid/GridElements';

export const DashboardContainer = styled(GridContainer)`
  height: 100vh;
  background: var(--white);
`;

export const MainContainer = styled.div`
  height: 90vh;
  background: var(--neutral-purple);
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3/10;
  border-right: var(--border-style);
  border-left: var(--border-style);
  border-color: var(--primary-light);
`;
