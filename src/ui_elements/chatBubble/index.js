import React from 'react';
import {
  ChatBubbleContainer,
  MessageContainer,
  NameContainer,
} from './ChatBubbleElements';

function ChatBubble({ type, sender, content }) {
  return (
    <ChatBubbleContainer type={type}>
      <NameContainer type={type}>{sender}</NameContainer>
      <MessageContainer type={type}>{content}</MessageContainer>
    </ChatBubbleContainer>
  );
}

export default ChatBubble;
