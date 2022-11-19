import React from 'react'
import { ChatBubbleContainer, MessageContainer, NameContainer } from './ChatBubbleElements';

function ChatBubble({type}) {
  return (
    <ChatBubbleContainer type={type}>
        <NameContainer type={type} >Natalia</NameContainer>
        <MessageContainer type={type}>Best believe I am still bejeweled</MessageContainer>
    </ChatBubbleContainer>
  )
}

export default ChatBubble;