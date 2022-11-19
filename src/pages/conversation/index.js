import { React, useState, useEffect } from 'react';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import ChatBubble from '../../components/chatBubble';
import { ConversationContainer } from './ConversationElements';
import { firestore } from '../../firebase/init';

function Conversation() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
    const getMessages = onSnapshot(q, (querySnapshot) => {
      const chatMessages = [];
      querySnapshot.forEach((doc) => {
        chatMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(chatMessages);
    });
    return () => getMessages();
  }, []);

  return (
    <ConversationContainer>
      <ChatBubble
        type="message"
        sender="Natalia"
        content="Best believe I'm still bejeweled"
      />
      <ChatBubble
        type="response"
        sender="Kinga"
        content="When I walk in the room"
      />
      {messages &&
        messages.map((message) => (
          <ChatBubble
            key={message.id}
            type="response"
            sender="Kinga"
            content={message.content}
          />
        ))}
    </ConversationContainer>
  );
}

export default Conversation;
