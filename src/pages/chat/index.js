import { Tabs, Tab } from '@mui/material';
import { React, useState, useEffect } from 'react';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import { ChatContainer, ChatTabs } from './ChatElements';
import UserChatCard from '../../components/userChatCard';
import TabPanel from './tabPanel';
import { firestore } from '../../firebase/init';
import { UserAuth } from '../../context/UserContext';

function Chat() {
  const { user: loggedInUser } = UserAuth();
  const [value, setValue] = useState(0);

  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = async () => {
    const q = query(
      collection(firestore, 'users'),
      where('displayName', '==', username)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      setUser(document.data());
    });
  };

  const handleKey = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.code === 'Enter' && handleSearch();
  };

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const userChats = onSnapshot(
        doc(firestore, 'userChats', loggedInUser.uid),
        (document) => {
          setChats(document.data());
        }
      );

      return () => {
        userChats();
      };
    };
    // eslint-disable-next-line no-unused-expressions
    loggedInUser.uid && getChats();
  }, [loggedInUser.uid]);

  return (
    <ChatContainer>
      <ChatTabs>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<HourglassEmptyRoundedIcon />} label="Ostatnie rozmowy" />
          <Tab icon={<PersonSearchRoundedIcon />} label="Znajdź osobę" />
        </Tabs>
      </ChatTabs>
      <TabPanel value={value} index={0}>
        {chats &&
          Object.entries(chats)?.map((chat) => (
            <UserChatCard
              key={chat[0]}
              user={chat[1].userInfo}
              lastMsg={chat[1].lastMessage.inputMessage}
              type="latest"
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <input
            type="text"
            placeholder="znajdź osobę"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {user && <UserChatCard user={user} type="search" />}
      </TabPanel>
    </ChatContainer>
  );
}

export default Chat;
