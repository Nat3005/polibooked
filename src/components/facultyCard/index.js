import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import {
  ArrowIconContainer,
  DataContainer,
  FacultyCardContainer,
  FacultyDataContainer,
  FacultyIconContainer,
} from './FacultyCardElements';
import { MediumText } from '../text/TextElements';

function FacultyCard({ item }) {
  return (
    <FacultyCardContainer id={item.order}>
      <DataContainer>
        <FacultyDataContainer>
          <FacultyIconContainer>
            <FavoriteBorderRoundedIcon />
          </FacultyIconContainer>
          <MediumText variant="dark" weight="bold">
            {item.name}
          </MediumText>
        </FacultyDataContainer>
        <ArrowIconContainer>
          <ArrowForwardRoundedIcon />
        </ArrowIconContainer>
      </DataContainer>
    </FacultyCardContainer>
  );
}

export default FacultyCard;
