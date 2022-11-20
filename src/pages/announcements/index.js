import React from 'react';
import { useParams } from 'react-router-dom';
import { AnnouncementsContainer } from './AnnouncementsElements';
import { useAnnouncements } from '../../dataManagement';
import AnnouncementCard from '../../components/announcementCard';

function Announcements({ openEditModal }) {
  const { abbreviation, major } = useParams();
  const [announcements] = useAnnouncements(abbreviation, major);

  return (
    <AnnouncementsContainer>
      {announcements?.map((item) => (
        <AnnouncementCard
          announcement={item}
          key={item.id}
          openEditModal={openEditModal}
        />
      ))}
    </AnnouncementsContainer>
  );
}

export default Announcements;
