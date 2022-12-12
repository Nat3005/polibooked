import { Tabs, Tab } from '@mui/material';
import { React, useState } from 'react';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
  ChatContainer,
  ChatTabs,
  IconContainer,
  NoResultsImage,
  SearchContainer,
  SearchInput,
  ImageContainer,
  TabContentContainer,
} from './ChatElements';
import UserChatCard from '../../ui_components/userChatCard';
import TabPanel from './tabPanel';
import { UserAuth } from '../../context/UserContext';
import NoResultsImg from '../../images/no_results.png';
import NoRecentsImg from '../../images/no_recents.png';
import { SmallText } from '../../ui_elements/text/TextElements';
import { getSearchedUsers } from '../../firebase/userService';
import { useChats } from '../../data/useChats';

function Chat() {
  const { user: loggedInUser } = UserAuth();
  const [value, setValue] = useState(0);

  const [username, setUsername] = useState('');
  const [users, setUsers] = useState(null);
  const [chats] = useChats(loggedInUser.uid);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    if (username === '') {
      return;
    }
    getSearchedUsers(username).then((usersList) => setUsers(usersList));
  };

  const handleKey = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.code === 'Enter' && handleSearch();
  };

  return (
    <ChatContainer>
      <ChatTabs>
        <Tabs
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile
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
        <TabContentContainer>
          {Object.keys(chats).length !== 0 ? (
            Object.entries(chats)?.map((chat) => (
              <UserChatCard
                key={chat[0]}
                user={chat[1].interlocutorUser}
                lastMsg={chat[1].lastMessage}
                type="latest"
              />
            ))
          ) : (
            <ImageContainer>
              <NoResultsImage src={NoRecentsImg} />
              <SmallText>Brak ostatnich rozmów</SmallText>
            </ImageContainer>
          )}
        </TabContentContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchContainer onSubmit={handleSearch}>
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
        {users ? (
          users.map((u) => <UserChatCard key={u.uid} user={u} type="search" />)
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
