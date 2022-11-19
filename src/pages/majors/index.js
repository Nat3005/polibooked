import React from 'react';
import {useLocation} from 'react-router-dom'
import MajorCard from '../../components/majorCard';
import { MajorsContainer } from './MajorsElements';
function Majors() {

  const location = useLocation ();
  const {firstGradeMajors,secondGradeMajors} = location.state;

  return (<MajorsContainer>
          {firstGradeMajors?.map((item) => (
              <MajorCard majorName={item} grade="first"/>
            ))}
                      {secondGradeMajors?.map((item) => (
              <MajorCard majorName={item} grade="second"/>
            ))}
  </MajorsContainer>);
}

export default Majors;
