import styled from 'styled-components';

export const DateCardContainer = styled.div`
    display: flex
    flex-direction: column;
    row-gap: 0.5.rem;
    cursor: pointer;
`;

export const TimeContainer = styled.div`
  padding: 1.5rem 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  width: 100%;
  background-color: var(--white);
  border-radius: 0px 0px var(--outer-radius) var(--outer-radius);
  visibility: hidden;
  height: 0px;
  padding: 0rem 1rem;
`;
export const BoxContainer = styled.div`
  background-color: ${(props) =>
    props.status === true ? 'var(--accent-yellow)' : 'var(--neutral-purple)'};
  display: flex;
  flex-direction: column;
  border: 2px solid
    ${(props) =>
      props.status === true ? 'var(--accent-yellow)' : 'var(--accent-purple)'};
  border-radius: var(--outer-radius);

  :hover {
    ${ButtonsContainer} {
      height: auto;
      padding: 1rem;
      visibility: visible;
      transition: all 0.5s ease-in-out;
    }
    background-color: ${(props) =>
      props.status === true ? 'var(--accent-yellow)' : 'var(--primary-light)'};
    transition: all 0.3s ease-in-out;
  }
`;
