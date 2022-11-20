// import { Tabs, Tab, TabPanel } from '@mui/material';
import { React } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
// import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
// import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import { ChatContainer } from './ChatElements';
// import UserChatCard from '../../components/userChatCard';

function Chat() {
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <ChatContainer>
      {/* <ChatTabs>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<HourglassEmptyRoundedIcon />}
            label="Ostatnie rozmowy"
            {...a11yProps(0)}
          />
          <Tab
            icon={<PeopleAltRoundedIcon />}
            label="Wszyscy użytkownicy"
            {...a11yProps(1)}
          />
          <Tab
            icon={<PersonSearchRoundedIcon />}
            label="Znajdź osobę"
            {...a11yProps(2)}
          />
        </Tabs>
      </ChatTabs>
      <TabPanel value={value} index={0}>
        <UserChatCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        all <UserChatCard />{' '}
      </TabPanel>
      <TabPanel value={value} index={2}>
        search <UserChatCard />
      </TabPanel> */}
    </ChatContainer>
  );
}

export default Chat;
