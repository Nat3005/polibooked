import React from 'react'
import { useAnnouncements, useFaculties } from '../../dataManagement';
import AnnouncementCard from '../../components/announcementCard'
import { HomepageContainer } from './HomepageElements';
import FacultyCard from '../../components/facultyCard';
function Homepage() {
  // const [announcements] = useAnnouncements();
  const [faculties] = useFaculties();
  return (
    <HomepageContainer>
      {
        faculties?.map((item)=> (
          <FacultyCard item={item} />
        ))
      }
                {/* {announcements?.map((item) => (
              <AnnouncementCard announcement={item} />
            ))} */}
    </HomepageContainer>
  )
}

export default Homepage;