import styled from 'styled-components';

export const UserChatCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  background-color: var(--white);
  padding: 0.5rem;
  border-bottom: 2px solid var(--accent-yellow);
  border-radius: var(--inner-radius);
`;
export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.125rem;
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
  background-color: var(--accent-yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 56px;
    height: 50px;
  }
`;
