import styled from 'styled-components';
import { GridContainer } from '../grid/GridElements';

export const ModalOverlay = styled(GridContainer)`
  height: 100%;
  width: 100%;
  background: rgba(63, 36, 70, 0.5);
  position: absolute;
  z-index: 200;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 456px) {
    padding: 0rem 1rem;
  }
`;

export const ModalContainer = styled.div`
  background: var(--white);
  padding: 1.5rem;
  grid-column: 4/10;
  border-radius: var(--outer-radius);
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media screen and (max-width: 768px) {
    grid-column: 2/8;
    grid-row: 1/4;
  }

  @media screen and (max-width: 456px) {
    grid-column: 1/5;
    grid-row: 1/4;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  font-weight: var(--bold);
  color: var(--accent-purple);
  font-size: var(--medium-text);
`;

export const SubmitButtons = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;

export const HeadlineContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  justify-content: flex-start;
`;
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
`;
export const FreeEventsContainer = styled.div`
  height: auto;
  max-height: 45vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  row-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
`;
