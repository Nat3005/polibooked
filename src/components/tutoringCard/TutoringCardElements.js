import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    student: 'var(--accent-yellow)',
    tutor: 'var(--accent-purple)',
  }[variant]);

  const handleHover = (variant) =>
  ({
    student: 'var(--neutral-yellow)',
    tutor: 'var(--primary-light)',
  }[variant]);

const handleFont = (variant) =>
({
  student: 'var(--primary-dark)',
  tutor: 'var(--white)',
}[variant]);

export const TutoringCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  background: var(--white);
  border-radius: var(--outer-radius);
  row-gap: 0.75rem;
  padding: 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  :hover {
    background: ${(props) => handleHover(props.type)};
    transition: var( --hover-transition);
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direcion: row;
  column-gap: 0.5rem;
  align-items: center;
`;
export const EventDetailsContainer = styled.div`
  background-color: ${(props) => handleColor(props.type)};
  color: ${(props) => handleFont(props.type)};
  padding: 0.5rem;
  border-radius: var(--inner-radius);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-drection: row;

`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
`


