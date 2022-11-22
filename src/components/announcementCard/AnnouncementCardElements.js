import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    tutor: 'var(--accent-purple)',
    student: 'var(--accent-yellow)',
  }[variant]);

const handleShade = (variant) =>
  ({
    tutor: 'var(--greyish-purple)',
    student: 'var(--greyish-yellow)',
  }[variant]);

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 1rem;
  border-radius: var(--outer-radius);
  border-bottom: 2px solid ${(props) => handleColor(props.variant)};
  row-gap: 0.5rem;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--primary-dark);
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    column-gap: 0.5rem;
    align-items: flex-start;
  }
`;
export const Picture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2.5px solid var(--white);

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const PictureContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${(props) => handleColor(props.variant)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 56px;
    height: 50px;
  }
`;
export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.125rem;

  @media screen and (max-width: 768px) {
    > p {
      font-size: var(--basic-text);
      line-height: 1.125rem;
    }
  }
`;
export const ChipsContainer = styled.div`
  color: ${(props) => handleShade(props.variant)};
  display: flex;
  flex-direction: row;
  row-wrap: wrap;
  column-gap: 0.5rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: flex-end;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--basic-text);
  color: var(--primary-dark);
  align-items: center;
  justify-content: flex-start;
`;