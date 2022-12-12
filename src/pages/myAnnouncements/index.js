import React from 'react';
import { UserAuth } from '../../context/UserContext';
import { usePersonalAnnouncements } from '../../data/usePersonalAnnouncements';
import {
  PersonalAnnouncementsContainer,
  NoAnnouncementsContainer,
  NoAnnouncementsImage,
} from './MyAnnouncementsElements';
import noPersonalAnnouncementsImg from '../../images/no_personal.png';
import { MediumText } from '../../ui_elements/text/TextElements';
import AnnouncementCard from '../../ui_components/announcementCard';

function MyAnnouncements({ openBookModal, openEditModal }) {
  const { user } = UserAuth();
  const [myAnnouncements] = usePersonalAnnouncements(user.uid);

  return (
    <PersonalAnnouncementsContainer>
      {myAnnouncements.length !== 0 &&
        myAnnouncements?.map((item) => (
          <AnnouncementCard
            announcement={item}
            key={item.id}
            openEditModal={openEditModal}
            openBookModal={openBookModal}
            type="personal"
          />
        ))}
      {myAnnouncements.length === 0 && (
        <NoAnnouncementsContainer>
          <NoAnnouncementsImage src={noPersonalAnnouncementsImg} />{' '}
          <MediumText>Nie masz jeszcze swoich ogłoszeń</MediumText>
        </NoAnnouncementsContainer>
      )}
    </PersonalAnnouncementsContainer>
  );
}

export default MyAnnouncements;
