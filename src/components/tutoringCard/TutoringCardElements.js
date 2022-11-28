import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    student: 'var(--accent-yellow)',
    tutor: 'var(--accent-purple)',
  }[variant]);

export const TutoringCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  background: var(--white);
  border-radius: var(--outer-radius);
  padding: 2rem 2rem 2rem 1rem;
  border-left: 2px solid ${(props) => handleColor(props.type)};
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  row-gap: 1.5rem;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EventDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

export const Picture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2.5px solid var(--white);

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const PictureContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${(props) => handleColor(props.type)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
