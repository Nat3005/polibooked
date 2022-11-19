import React from 'react';
import { AnnouncementsContainer } from './AnnouncementsElements';
import { useParams } from 'react-router-dom';
function Announcements() {
  const major = useParams();
  console.log({major});
  return <AnnouncementsContainer>{major.majorName}</AnnouncementsContainer>;
}

export default Announcements;
