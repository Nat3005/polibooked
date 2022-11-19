import styled from "styled-components";

const handleLeftBorder = (type) =>
  ({
    message: '0px solid var(--accent-yellow)',
    response: '2px solid var(--accent-purple)',
  }[type]);

  const handleRightBoder = (type) =>
  ({
    message: '2px solid var(--accent-yellow)',
    response: '0px solid var(--accent-purple)',
  }[type]);

  const handleAlignment = (type) =>
  ({
    message: 'flex-end',
    response: 'flex-start',
  }[type]);

export const ChatBubbleContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: ${(props) => handleAlignment(props.type)};
    align-self: ${(props) => handleAlignment(props.type)};
    row-gap: 0.25rem;
    width:45%;
`
export const NameContainer = styled.p`
    color: var(--dark);
    font-size: var(--small-text);
`

export const MessageContainer = styled.p`
    background-color: var(--white);
    padding: 0.75rem;
    border-left: ${(props) => handleLeftBorder(props.type)};
    border-right: ${(props) => handleRightBoder(props.type)};
    line-height: 1.5rem;
    color: var(--dark);
    border-radius: var(--outer-radius);
`