import { Tabs, Tab } from '@mui/material';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import { ChatContainer,ChatTabs } from './ChatElements';
import UserChatCard from '../../components/userChatCard';
import TabPanel from './tabPanel';
import {firestore} from '../../firebase/init';
import { collection,doc,getDocs,query,where, onSnapshot} from 'firebase/firestore';
import { UserAuth } from '../../context/UserContext';
import { UserChat } from '../../context/ChatContext';
function Chat() {

  const {user: loggedInUser} = UserAuth ();
   const [value, setValue] = useState(0);
  
  const [username, setUsername] =  useState("")
  const [user,setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = async() => {
    console.log("here");
    const q = query(collection(firestore, 'users'),where("displayName", "==",username ))

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=> {
      console.log(doc);
      setUser(doc.data());
    })
  }

  const handleKey = (e) => {
    e.code ==='Enter' && handleSearch ();
  }

  const [chats, setChats] = useState([]);
  const {dispatch} = UserChat();

  useEffect(() => {
    const getChats = () => {
      const userChats = onSnapshot(doc(firestore, 'userChats',loggedInUser.uid),(doc) => {
        setChats(doc.data())
      });
    
      return () => {
        userChats();
      };
    };

    loggedInUser.uid && getChats();
  }, [loggedInUser.uid])

  console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({type: "changeUser", payload: u})
  }

  return (
    <ChatContainer>
      <ChatTabs>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<HourglassEmptyRoundedIcon />}
            label="Ostatnie rozmowy"
          />
          <Tab
            icon={<PersonSearchRoundedIcon />}
            label="Znajdź osobę"
          />
        </Tabs>
      </ChatTabs>
      <TabPanel value={value} index={0}>
        
        {
          Object.entries(chats)?.map((chat) => (
            <UserChatCard user={chat[1].userInfo} type="latest" onClick={handleSelect(chat[1].userInfo)}/>
          ))
        }



      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <input type="text" placeholder='znajdź osobę' onKeyDown={handleKey} onChange={e=> setUsername(e.target.value)}/>
        </div>
        {user && <UserChatCard user={user} type="search"/>}
      </TabPanel>
    </ChatContainer>
  );
}

export default Chat;
