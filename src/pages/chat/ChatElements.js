import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1.25rem 2.5rem;
`;

export const ChatTabs = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  background: var(--white);
  border-radius: var(--outer-radius);
  border-bottom: 2px solid var(--accent-purple);
  align-items: center;
`;

export const IconContainer = styled.div`
  color: var(--accent-purple);
`;
export const SearchInput = styled.input`
  background: var(--white);
  border: none;
  outline: none;
  font-size: var(--medium-text);
  color: var(--primary-dark);
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: var(--basic-text);
  }

  &:focus: {
    outline: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }

  ::placeholder {
    color: var(--accent-purple);
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  justify-self: center;
  height: 55vh;
`;

export const NoResultsImage = styled.img`
  width: 250px;
  height: auto;
`;
