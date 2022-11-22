import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    search: 'var(--accent-yellow)',
    latest: 'var(--accent-purple)',
  }[variant]);

const handleHoverColor = (variant) =>
  ({
    search: 'var(--neutral-yellow)',
    latest: 'var(--primary-light)',
  }[variant]);

export const UserChatCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  background-color: var(--white);
  padding: 0.5rem;
  border-left: 2px solid ${(props) => handleColor(props.variant)};
  border-radius: var(--inner-radius);
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  :hover {
    background-color: ${(props) => handleHoverColor(props.variant)};
    transition: all 0.3s ease-in-out;
  }
`;
export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;
`;

export const TextData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.125rem;
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2.5px solid var(--white);

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const PictureContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${(props) => handleColor(props.variant)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
