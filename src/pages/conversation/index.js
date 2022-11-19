import {React, useState,useEffect, useRef} from 'react';
import ChatBubble from '../../components/chatBubble';
import {ConversationContainer} from './ConversationElements';
function Conversation() {
  return (
    <ConversationContainer>
        <ChatBubble type="message"></ChatBubble>
        <ChatBubble type="response"></ChatBubble>
    </ConversationContainer>
  )
}

export default Conversation