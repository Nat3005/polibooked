import React from 'react';
import { useFaculties } from '../../dataManagement';
import { HomepageContainer } from './HomepageElements';
import FacultyCard from '../../components/facultyCard';

function Homepage() {
  const [faculties] = useFaculties();
  return (
    <HomepageContainer>
      {faculties?.map((item) => (
        <FacultyCard item={item} />
      ))}
      {/* {announcements?.map((item) => (
              <AnnouncementCard announcement={item} key={item.id} />
            ))} */}
    </HomepageContainer>
  );
}

export default Homepage;
