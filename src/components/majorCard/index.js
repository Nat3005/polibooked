import React from 'react'
import { Chip } from '../chips/ChipsElements';
import { GradeContainer, MajorCardContainer, NameContainer,ArrowButtonContainer } from './MajorCardElements';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { MediumText } from '../text/TextElements';
import { useNavigate, useLocation } from 'react-router-dom';

function MajorCard({majorName, grade}) {

    const location = useLocation();
    const navigate = useNavigate();
    const handleAnnouncements = () => {
        navigate(`${majorName}`);
      } 
    
  return (
    <MajorCardContainer variant={grade} onClick={handleAnnouncements}>
        <MediumText variant="dark" weight="bold">{majorName}</MediumText>
        <GradeContainer>
            {grade==="first" &&
            <Chip variant="yellowAccent">I stopień</Chip>
            }
            {grade==="second" &&
            <Chip variant="dark">II stopień</Chip>
            }
            <ArrowButtonContainer variant={grade}>
                <ArrowForwardRoundedIcon />
            </ArrowButtonContainer>
        </GradeContainer>
    </MajorCardContainer>
  )
}

export default MajorCard;