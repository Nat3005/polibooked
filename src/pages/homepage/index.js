import React from 'react';
import { useFaculties } from '../../dataManagement';
import { HomepageContainer } from './HomepageElements';
import FacultyCard from '../../components/facultyCard';

function Homepage() {
  const [faculties] = useFaculties();
  return (
    <HomepageContainer>
      {faculties?.map((item) => (
        <FacultyCard key={item.name} item={item} />
      ))}
    </HomepageContainer>
  );
}

export default Homepage;
