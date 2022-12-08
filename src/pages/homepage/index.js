import React from 'react';
import { HomepageContainer } from './HomepageElements';
import FacultyCard from '../../ui_elements/facultyCard';
import { useFaculties } from '../../data/useFaculties';

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
