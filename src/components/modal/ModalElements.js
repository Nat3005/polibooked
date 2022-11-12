import styled from 'styled-components';
import { GridContainer } from '../grid/GridElements';

const handleColor = (variant) =>
  ({
    tutor: 'var(--accent-purple)',
    student: 'var(--accent-yellow)',
  }[variant]);

export const ModalOverlay = styled(GridContainer)`
  height: 100%;
  width: 100%;
  background: rgba(63, 36, 70, 0.5);
  position: absolute;
  z-index: 10;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 456px) {
    padding: 0rem 1rem;
  }
`;

export const ModalContainer = styled.div`
  background: var(--white);
  padding: 1.5rem;
  grid-column: 4/9;
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
  color: ${(props) => handleColor(props.variant)};
  font-size: var(--medium-text);
`;

export const HeadlineContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5rem;
  font-size: var(--basic-text);
`;

export const SubmitButtons = styled.form`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;
