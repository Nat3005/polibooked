import { Tabs, Tab } from '@mui/material';
import { React, useState } from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { getDocs, onSnapshot } from 'firebase/firestore';
import dayjs from 'dayjs';
import TabPanel from './tabPanel';
import { CalendarContainer, CalendarTabs } from './CalendarElements';
import { PrimaryButton } from '../../components/buttons/ButtonElements';
import { MediumText, SmallText } from '../../components/text/TextElements';
import DateCard from '../../components/dateCard';
import { firestore } from '../../firebase/init';
import { UserAuth } from '../../context/UserContext';
import {
  useBookedEvents,
  useFreeEvents,
  usePersonalEvents,
} from '../../dataManagement';

function Calendar({ showEventModal, setShowEventModal }) {
  const { user } = UserAuth();
  const [personalEvents] = usePersonalEvents(user.uid);
  const [bookedEvents] = useBookedEvents(user.uid);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openEventModal = () => {
    setShowEventModal(!showEventModal);
  };
  console.log(bookedEvents);
  return (
    <CalendarContainer>
      <CalendarTabs>
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
          <Tab icon={<SchoolRoundedIcon />} label="Udzielane korepetycje" />
          <Tab
            icon={<EmojiPeopleRoundedIcon />}
            label="Pobierane korepetycje"
          />
          <Tab icon={<CalendarMonthRoundedIcon />} label="Mój terminarz" />
        </Tabs>
      </CalendarTabs>
      <TabPanel value={value} index={0}>
        pierwszy
      </TabPanel>
      <TabPanel value={value} index={1}>
        drugi
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PrimaryButton
          size="big"
          variant="purpleAccent"
          onClick={openEventModal}
        >
          {' '}
          <SchoolRoundedIcon />
          Dodaj termin korepetycji
        </PrimaryButton>
        <SmallText variant="primaryDark" weight="bold">
          Moje Terminy
        </SmallText>
        {Object.keys(personalEvents).length !== 0 ? (
          Object.entries(personalEvents)?.map((e) => (
            <DateCard
              key={e[1].id}
              startDate={e[1].eventStartTime}
              endDate={e[1].eventEndTime}
              type="editable"
            />
          ))
        ) : (
          <></>
        )}
      </TabPanel>
    </CalendarContainer>
  );
}

export default Calendar;
