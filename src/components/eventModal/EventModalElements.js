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

export const FormsContainer = styled.div`
  height: 55vh;
  overflow-y: scroll;
`;

export const EventFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centerl;
  justify-content: flex-start;
  row-gap: 0.5rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;

export const CalendarPicker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.25rem;
  justify-content: center;
  align-items: center;
`;
