import styled from 'styled-components';
import { GridContainer } from '../../ui_elements/grid/GridElements';

const handleScroll = (type) =>
  ({
    scroll: 'auto;',
    noScroll: 'hidden;',
  }[type]);

export const DashboardContainer = styled(GridContainer)`
  height: 100vh;
  background: var(--white);
  overflow: hidden;
`;

export const MainContainer = styled.section`
  height: 86vh;
  background: var(--neutral-purple);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  overflow-y: ${(props) => handleScroll(props.type)};

  @media screen and (max-width: 768px) {
    grid-column: 1/9;
    grid-row: 2/3;
  }

  @media screen and (max-width: 456px) {
    grid-column: 1/5;
    grid-row: 2/3;
  }
`;

export const CenterContainer = styled.section`
  display: flex;
  flex-direction: column;
  grid-column: 4/13;
  border-right: var(--border-style-light);
  border-left: var(--border-style-light);
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
