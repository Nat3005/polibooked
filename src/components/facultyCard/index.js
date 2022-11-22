import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useNavigate } from 'react-router-dom';
import {
  ArrowIconContainer,
  FacultyCardContainer,
  FacultyDataContainer,
  FacultyIconContainer,
} from './FacultyCardElements';
import { MediumText } from '../text/TextElements';
import { MyIcon } from '../../utils/icons';

function FacultyCard({ item }) {
  const navigate = useNavigate();

  const handleMajor = () => {
    navigate(`${item.abbreviation}`, {
      state: {
        firstGradeMajors: item.majors_first_grade,
        secondGradeMajors: item.majors_second_grade,
      },
    });
  };

  return (
    <FacultyCardContainer id={item.order} onClick={handleMajor}>
      <FacultyDataContainer>
        <FacultyIconContainer>
          <MyIcon name={item.icon_name} />
        </FacultyIconContainer>
        <MediumText variant="dark" weight="bold">
          {item.name}
        </MediumText>
        <ArrowIconContainer>
          Zobacz więcej! <ArrowForwardRoundedIcon />
        </ArrowIconContainer>
      </FacultyDataContainer>
    </FacultyCardContainer>
  );
}

export default FacultyCard;
