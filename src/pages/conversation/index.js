import { React, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
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
import { useMessages } from '../../dataManagement';

function Conversation() {
  const [messages] = useMessages();
  const { user } = UserAuth();
  // const scroll = useRef();

  // useEffect(() => {
  //   const q = query(collection(firestore, 'messages'), orderBy('timestamp'));
  //   const getMessages = onSnapshot(q, (querySnapshot) => {
  //     const chatMessages = [];
  //     querySnapshot.forEach((doc) => {
  //       chatMessages.push({ ...doc.data(), id: doc.id });
  //     });
  //     setMessages(chatMessages);
  //   });
  //   return () => getMessages();
  // }, []);

  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage === '') {
      // alert('where message');
      return;
    }
    const { uid, displayName } = user;
    await addDoc(collection(firestore, 'messages'), {
      content: inputMessage,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInputMessage('');
  };
  return (
    <ConversationContainer>
      <MessagesContainer>
        {messages &&
          messages.map((message) => {
            let type = '';
            if (message.uid === user.uid) {
              type = 'message';
            } else {
              type = 'response';
            }
            return (
              <ChatBubble
                key={message.id}
                sender={message.name}
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
