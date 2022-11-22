import { Tabs, Tab } from '@mui/material';
import { React, useState, useEffect } from 'react';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
  ChatContainer,
  ChatTabs,
  IconContainer,
  NoResultsImage,
  SearchContainer,
  SearchInput,
  ImageContainer,
} from './ChatElements';
import UserChatCard from '../../components/userChatCard';
import TabPanel from './tabPanel';
import { firestore } from '../../firebase/init';
import { UserAuth } from '../../context/UserContext';
import NoResultsImg from '../../images/no_results.png';

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
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: 'var(--accent-purple)' },
          }}
          sx={{
            '& button': { color: 'var(--primary-dark)', textTransform: 'none' },
            '& button.Mui-selected': {
              color: 'var(--accent-purple)',
              textTransform: 'none',
            },
          }}
        >
          <Tab icon={<AccessTimeRoundedIcon />} label="Ostatnie rozmowy" />
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
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Wpisz imię i nazwisko szukanej osoby"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
          />
          <IconContainer>
            <SearchRoundedIcon />
          </IconContainer>
        </SearchContainer>
        {user ? (
          <UserChatCard user={user} type="search" />
        ) : (
          <ImageContainer>
            <NoResultsImage src={NoResultsImg} />
          </ImageContainer>
        )}
      </TabPanel>
    </ChatContainer>
  );
}

export default Chat;
