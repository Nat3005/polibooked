import React from 'react';
import { useParams } from 'react-router-dom';
import {
  AnnouncementsContainer,
  NoAnnouncementsContainer,
  NoAnnouncementsImage,
} from './AnnouncementsElements';
import AnnouncementCard from '../../ui_components/announcementCard';
import NoAnnouncementsImg from '../../images/no_announcements.png';
import { MediumText } from '../../ui_elements/text/TextElements';
import { useAnnouncements } from '../../data/useAnnouncements';

function Announcements({ openEditModal, openBookModal }) {
  const { abbreviation, major } = useParams();
  const [announcements] = useAnnouncements(abbreviation, major);

  return (
    <AnnouncementsContainer>
      {announcements.length !== 0 &&
        announcements?.map((item) => (
          <AnnouncementCard
            announcement={item}
            key={item.id}
            openEditModal={openEditModal}
            openBookModal={openBookModal}
            type="announcements"
          />
        ))}
      {announcements.length === 0 && (
        <NoAnnouncementsContainer>
          <NoAnnouncementsImage src={NoAnnouncementsImg} alt="" />{' '}
          <MediumText>Brak ogłoszeń</MediumText>
        </NoAnnouncementsContainer>
      )}
    </AnnouncementsContainer>
  );
}

export default Announcements;
