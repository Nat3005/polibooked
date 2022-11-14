import { useState, useEffect } from 'react';

import { getAnnouncements } from './firebase/announcementService';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements().then((data) => setAnnouncements(data));
  }, []);
  return [announcements];
};
