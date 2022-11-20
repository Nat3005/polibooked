import { Tabs, Tab } from '@mui/material';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import { ChatContainer,ChatTabs } from './ChatElements';
import UserChatCard from '../../components/userChatCard';
import TabPanel from './tabPanel';
import {firestore} from '../../firebase/init';
import { collection,getDocs,query,where} from 'firebase/firestore';
function Chat() {
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


  return (
    <ChatContainer>
      <ChatTabs>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<HourglassEmptyRoundedIcon />}
            label="Ostatnie rozmowy"
          />
          <Tab
            icon={<PeopleAltRoundedIcon />}
            label="Wszyscy użytkownicy"
          />
          <Tab
            icon={<PersonSearchRoundedIcon />}
            label="Znajdź osobę"
          />
        </Tabs>
      </ChatTabs>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        all 
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <input type="text" placeholder='znajdź osobę' onKeyDown={handleKey} onChange={e=> setUsername(e.target.value)}/>
        </div>
        {user && <UserChatCard user={user} />}
      </TabPanel>
    </ChatContainer>
  );
}

export default Chat;
