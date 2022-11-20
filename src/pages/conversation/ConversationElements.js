import styled from 'styled-components';

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1.25rem;
  overflow: hidden;
  align-items: stretch;
`;

export const MessagesContainer = styled.div`
  height: 70vh;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  row-gap: 0.5rem;
`

export const SendMessageContainer = styled.form`
  height: 10vh;
  background-color: var(--white);
  padding: 1rem;
  border: 2px solid var(--accent-yellow);
  border-radius: var(--outer-radius);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;

`

export const MessageInput = styled.textarea`
  width: 100%;
  padding: 0.5rem ;
  border: none;
  height: 5vh;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: var(--greyish-yellow);
  }
`