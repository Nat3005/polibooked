import { React, useState, useEffect } from 'react';
import {
  serverTimestamp,
  onSnapshot,
  updateDoc,
  arrayUnion,
  Timestamp,
  doc,
} from 'firebase/firestore';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ChatBubble from '../../components/chatBubble';
import {
  ConversationContainer,
  MessageInput,
  MessagesContainer,
  SendMessageContainer,
} from './ConversationElements';
import { firestore } from '../../firebase/init';
import { PrimaryButton } from '../../components/buttons/ButtonElements';
import { UserAuth } from '../../context/UserContext';

function Conversation() {
  const { user: loggedInUser } = UserAuth();
  const location = useLocation();
  const { conversationId, user } = location.state;
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getMessages = onSnapshot(
      doc(firestore, 'chats', conversationId),
      (document) => {
        // eslint-disable-next-line no-unused-expressions
        document.exists() && setMessages(document.data().messages);
      }
    );
    return () => {
      getMessages();
    };
  }, [conversationId]);

  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage === '') {
      return;
    }

    const { uid, displayName } = loggedInUser;

    await updateDoc(doc(firestore, 'chats', conversationId), {
      messages: arrayUnion({
        id: uuid(),
        content: inputMessage,
        displayName,
        uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(firestore, 'userChats', uid), {
      [`${conversationId}.lastMessage`]: {
        inputMessage,
      },
      [`${conversationId}.date`]: serverTimestamp(),
    });

    await updateDoc(doc(firestore, 'userChats', user.uid), {
      [`${conversationId}.lastMessage`]: {
        inputMessage,
      },
      [`${conversationId}.date`]: serverTimestamp(),
    });

    setInputMessage('');
  };

  return (
    <ConversationContainer>
      <MessagesContainer>
        {messages &&
          messages.map((message) => {
            let type = '';
            if (message.uid === loggedInUser.uid) {
              type = 'message';
            } else {
              type = 'response';
            }
            return (
              <ChatBubble
                key={message.id}
                sender={message.displayName}
                content={message.content}
                type={type}
              />
            );
          })}
      </MessagesContainer>
      <SendMessageContainer onSubmit={sendMessage}>
        <MessageInput
          placeholder="Napisz wiadomość"
          type="textarea"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <PrimaryButton size="small" variant="yellowAccent" type="submit">
          <MailOutlineRoundedIcon /> Wyślij
        </PrimaryButton>
      </SendMessageContainer>
    </ConversationContainer>
  );
}

export default Conversation;
