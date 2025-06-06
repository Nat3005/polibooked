import styled from 'styled-components';
import { GridContainer } from '../../ui_elements/grid/GridElements';

const handleColor = (variant) =>
  ({
    tutorNew: 'var(--accent-purple)',
    studentNew: 'var(--accent-yellow)',
    tutorEdit: 'var(--accent-purple)',
    studentEdit: 'var(--accent-yellow)',
  }[variant]);

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

export const ModalContainer = styled.section`
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

export const TitleContainer = styled.article`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  font-weight: var(--bold);
  color: ${(props) => handleColor(props.variant)};
  font-size: var(--medium-text);
`;

export const HeadlineContainer = styled.section`
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
  column-gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SubmitButtons = styled.form`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  column-gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;
