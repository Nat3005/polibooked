import styled from 'styled-components';

export const DateCardContainer = styled.article`
    display: flex
    flex-direction: column;
    row-gap: 0.5.rem;
    cursor: pointer;

    @media screen and (max-width: 768px){
      width: auto;
    }

`;

export const BoxContainer = styled.section`
  background-color: ${(props) =>
    props.status === true ? 'var(--accent-yellow)' : 'var(--neutral-purple)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  row-gap: 0.5rem;
  border: 2px solid
    ${(props) =>
      props.status === true ? 'var(--accent-yellow)' : 'var(--accent-purple)'};
  border-radius: var(--outer-radius);

  :hover {
    background-color: ${(props) =>
      props.status === true ? 'var(--accent-yellow)' : 'var(--primary-light)'};
    transition: all 0.3s ease-in-out;
  }
`;
