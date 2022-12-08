import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useNavigate } from 'react-router-dom';
import { Chip } from '../chips/ChipsElements';
import {
  GradeContainer,
  MajorCardContainer,
  ArrowButtonContainer,
} from './MajorCardElements';
import { MediumText } from '../text/TextElements';

function MajorCard({ major, grade }) {
  const navigate = useNavigate();
  const handleAnnouncements = () => {
    navigate(`${major}`);
  };

  return (
    <MajorCardContainer variant={grade} onClick={handleAnnouncements}>
      <MediumText variant="dark" weight="bold">
        {major}
      </MediumText>
      <GradeContainer>
        {grade === 'first' && <Chip variant="yellowAccent">I stopień</Chip>}
        {grade === 'second' && <Chip variant="dark">II stopień</Chip>}
        <ArrowButtonContainer variant={grade}>
          <ArrowForwardRoundedIcon />
        </ArrowButtonContainer>
      </GradeContainer>
    </MajorCardContainer>
  );
}

export default MajorCard;
