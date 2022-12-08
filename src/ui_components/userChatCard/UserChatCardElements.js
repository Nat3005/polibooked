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
  padding: 0.5rem;
  background-color: var(--white);
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
