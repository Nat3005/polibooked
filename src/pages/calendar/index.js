import { Tabs, Tab } from '@mui/material';
import { React, useState } from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TabPanel from './tabPanel';
import {
  CalendarContainer,
  CalendarTabs,
  NoEventsContainer,
  NoEventsImage,
  TabContentContainer,
} from './CalendarElements';
import { PrimaryButton } from '../../ui_elements/buttons/ButtonElements';
import { SmallText } from '../../ui_elements/text/TextElements';
import DateCard from '../../ui_elements/dateCard';
import { UserAuth } from '../../context/UserContext';
import TutoringCard from '../../ui_components/tutoringCard';
import noBookedEventsImg from '../../images/no_tutors.png';
import noEventsImg from '../../images/no_events.png';
import noSubscribedEvents from '../../images/no_subscribed.png';
// import { makeStyles } from "@material-ui/styles";
import { useFreeEvents } from '../../data/useFreeEvents';
import { useSubscribedEvents } from '../../data/useSubscribedEvents';
import { useBookedEvents } from '../../data/useBookedEvents';

function Calendar({ showEventModal, setShowEventModal }) {
  const { user } = UserAuth();
  const [personalEvents] = useFreeEvents(user.uid);
  const [bookedEvents] = useBookedEvents(user.uid);
  const [subscribedEvents] = useSubscribedEvents(user.uid);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openEventModal = () => {
    setShowEventModal(!showEventModal);
  };

  return (
    <CalendarContainer>
      <CalendarTabs>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
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
        <TabContentContainer>
          {Object.keys(bookedEvents).length !== 0 ? (
            Object.entries(bookedEvents)?.map((e) => (
              <TutoringCard
                key={e[1].id}
                eventID={e[1].id}
                type="tutor"
                comment={e[1].comment}
                user={e[1].subscribingUser}
                startDate={e[1].eventStartTime}
                endDate={e[1].eventEndTime}
                publisher={e[1].publisherRef}
              />
            ))
          ) : (
            <NoEventsContainer>
              <NoEventsImage src={noBookedEventsImg} />
              <SmallText>Nie udzielasz żadnych korepetycji</SmallText>
            </NoEventsContainer>
          )}
        </TabContentContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabContentContainer>
          {Object.keys(subscribedEvents).length !== 0 ? (
            Object.entries(subscribedEvents)?.map((e) => (
              <TutoringCard
                key={e[1].id}
                eventID={e[1].id}
                publisher={e[1].publisherRef}
                type="student"
                comment={e[1].comment}
                user={e[1].publishingUser}
                startDate={e[1].eventStartTime}
                endDate={e[1].eventEndTime}
              />
            ))
          ) : (
            <NoEventsContainer>
              <NoEventsImage src={noSubscribedEvents} />
              <SmallText>Nie uczestniczysz w żadnych korepetycjach</SmallText>
            </NoEventsContainer>
          )}
        </TabContentContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PrimaryButton
          style={{ alignSelf: 'flex-start' }}
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
        <TabContentContainer>
          {Object.keys(personalEvents).length !== 0 ? (
            Object.entries(personalEvents)?.map((e) => (
              <DateCard
                key={e[1].id}
                startDate={e[1].eventStartTime}
                endDate={e[1].eventEndTime}
                type="editable"
                eventID={e[1].id}
              />
            ))
          ) : (
            <NoEventsContainer>
              <NoEventsImage src={noEventsImg} />
              <SmallText>Nie udostępniasz żadnych terminów</SmallText>
            </NoEventsContainer>
          )}
        </TabContentContainer>
      </TabPanel>
    </CalendarContainer>
  );
}

export default Calendar;
