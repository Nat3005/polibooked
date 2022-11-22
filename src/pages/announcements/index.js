import React from 'react';
import { useParams } from 'react-router-dom';
import {
  AnnouncementsContainer,
  NoAnnouncementsContainer,
  NoAnnouncementsImage,
} from './AnnouncementsElements';
import { useAnnouncements } from '../../dataManagement';
import AnnouncementCard from '../../components/announcementCard';
import NoAnnouncementsImg from '../../images/no_announcements.png';
import { MediumText } from '../../components/text/TextElements';

function Announcements({ openEditModal }) {
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
          />
        ))}
      {announcements.length === 0 && (
        <NoAnnouncementsContainer>
          <NoAnnouncementsImage src={NoAnnouncementsImg} />{' '}
          <MediumText>Brak ogłoszeń</MediumText>
        </NoAnnouncementsContainer>
      )}
    </AnnouncementsContainer>
  );
}

export default Announcements;
